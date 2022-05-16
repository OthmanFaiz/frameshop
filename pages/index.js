import Head from 'next/head';
import Headers from '../components/Layout/Header';

export default function Home() {
	return (
		<>
			<Head>
				<title>Frameshop testing time</title>
			</Head>

			{/* Components */}
			<Headers />
		</>
	);
}
