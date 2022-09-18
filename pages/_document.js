import Document, { Html, Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
    redner() {
        return (
            <Html>
                <Head>
                    <body>
                        <Main />
                        <div id="root"/>
                        <div id="portal"/>
                        <NextScript />
                    </body>
                </Head>
            </Html>
        )
    }
}
