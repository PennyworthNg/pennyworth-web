import { KeyStore, initWasm } from "@trustwallet/wallet-core";

export const createWallet = async (email) => {
    initWasm()
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    try {
        console
            .log(initWasm().then((response) => console.log(response)))
            .catch((err) => console.log(err));
        /*   const { CoinType, HexCoding, HDWallet, AnyAddress } = WalletCore;
        const wallet = HDWallet.create(256, "pennyworth");
        const mnemonic = wallet.mnemonic();

        const key = wallet.getKeyForCoin(CoinType.near);
        const pubKey = key.getPublicKeySecp256k1(false);
        const address = AnyAddress.createWithPublicKey(pubKey, CoinType.near);
        const storage = new KeyStore.FileSystemStorage("/tmp");
        const keystore = new KeyStore.Default(WalletCore, storage);

        const storedWallet = await keystore.import(mnemonic, "Coolw", email, [
            CoinType.near,
        ]); */
    } catch (err) {
        console.log(err);
    }
};
