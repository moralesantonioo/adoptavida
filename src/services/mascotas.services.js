import {
    collection,
    getFirestore,
    doc,
    setDoc,
    deleteDoc,
    onSnapshot,
    updateDoc
} from "firebase/firestore";


export class MascotasServices {
    db = getFirestore();
    async getMascotas(setMascotas, setLoading) {
        await onSnapshot(collection(this.db, "mascotas"), (collection) => {
            const mascotas = [];
            collection.forEach((doc) => {
                mascotas.push({ id: doc.id, ...doc.data() })
            })
            setMascotas(mascotas
                .sort(function (x, y) {
                    return x.timestamp - y.timestamp;
                })
                .reverse());
            setLoading(false)
        })
    }

    async setProducts(values) {
        const newMascotas = doc(collection(this.db, "mascotas"));
        await setDoc(newMascotas, values);
    }

    async deleteProduct(id) {
        await deleteDoc(doc(this.db, "mascotas", `${id}`));
    }

    async updateProduct(id, obj) {
        const washingtonRef = doc(this.db, "mascotas", `${id}`);
        await updateDoc(washingtonRef, {...obj});
    }
}