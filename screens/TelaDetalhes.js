import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import { getMovieDetails } from '../services/tmdb';

export default function TelaDetalhes({ route }) {
	const { movieId } = route.params || {};
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		let mounted = true;
		const fetchDetails = async () => {
			setLoading(true);
			try {
				const res = await getMovieDetails(movieId);
				if (mounted) setMovie(res);
			} catch (e) {
				setError('Erro ao carregar detalhes do filme.');
			} finally {
				if (mounted) setLoading(false);
			}
		};
		if (movieId) fetchDetails();
		return () => { mounted = false; };
	}, [movieId]);

	if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;
	if (error) return <View style={styles.center}><Text style={styles.error}>{error}</Text></View>;
	if (!movie) return <View style={styles.center}><Text>Nenhum detalhe disponível.</Text></View>;

	const poster = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null;

	return (
		<ScrollView contentContainerStyle={styles.container}>
			{poster ? <Image source={{ uri: poster }} style={styles.poster} /> : null}
			<Text style={styles.title}>{movie.title}</Text>
			<Text style={styles.sub}>{movie.release_date} • {movie.vote_average} ⭐</Text>
			<Text style={styles.overview}>{movie.overview}</Text>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: { padding: 12 },
	poster: { width: '100%', height: 450, resizeMode: 'cover', borderRadius: 8, marginBottom: 12 },
	title: { fontSize: 20, fontWeight: 'bold', marginBottom: 6 },
	sub: { color: '#666', marginBottom: 12 },
	overview: { fontSize: 16, lineHeight: 22 },
	center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
	error: { color: 'red' }
});
