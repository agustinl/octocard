import Head from 'next/head'
import Card from '../../components/Card'
import Skeleton from '../../components/Skeleton'
import ErrorCard from '../../components/ErrorCard'
import Header from '../../components/Header'
import { useRouter } from 'next/router'
import { useState, useEffect, useContext } from "react"
import { DirectionContext } from "../../contexts/DirectionContext"


export default function Profile(Props) {
	
	const position = useContext(DirectionContext);
    const direction = position.state.position;

	const [user, setUser] = useState({});
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const router = useRouter()
	const username = router.query;

	useEffect(() => {
		fetch(`https://api.github.com/users/${username.id}`)
			.then(function(response) {
				if (!response.ok) {
					setError(true);
					throw Error(response.statusText);
				}
				return response.json();
			}).then(function(response) {
				setUser(response);
				setLoading(false);
				setError(false);
			}).catch(function(error) {
				setError(true);
				setLoading(false);
			});
	
	}, [username.id]);

	return (
		<>
			<Head>
				<title>@{username.id} | Octocard</title>
				<link rel="canonical" href={`https://octocard.vercel.app/me/${username.id}`} />
			</Head>

			<Header
				iconDirection={true}
				iconCube={true}
			/>
			
			<div id={direction} className="flex justify-center flex-grow flex-shrink items-center pt-3 pb-6">
				{
					loading ? <Skeleton /> : null
				}
				{
					Object.keys(user).length > 0 && !loading ? <Card {...user} /> : null
				}
				{
					error ? <ErrorCard {...username} /> : null
				}
			</div>
		</>
	)
}