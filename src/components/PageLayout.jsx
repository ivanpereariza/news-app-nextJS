import Head from "next/head"

const PageLayout = ({ children, title = 'NewsApp' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta className='description' content='newsapp. the best app to read news' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}

export default PageLayout