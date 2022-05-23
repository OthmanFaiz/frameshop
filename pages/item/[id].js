// for testing before connect to the component once its clicked

import { useRouter } from 'next/router';
import AddItem from '../../components/item/AddItem';

export default function Item() {
	const router = useRouter();
	const { id } = router.query;
	return (
		<>
			<AddItem />
			<h1>{id}</h1>
		</>
	);
}
