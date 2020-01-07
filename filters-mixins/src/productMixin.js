export const productMixin = {
    data() {
        return {
            mesaj: "Merhaba Dünya",
            products: ["Monitor", "Klavye", "Masa", "Kitap", "Şişe", "HDD"],
            searchText: ""
        };
    },
    components: {},
    filters: {
        buyukYap(v) { //local filter tanımlanması
            return v.toUpperCase();
        }
    },
    computed: {
        filtered() {
            return this.products.filter((element) => {
                return element.toLowerCase().match(this.searchText.toLowerCase())
            })
        }
    }
}