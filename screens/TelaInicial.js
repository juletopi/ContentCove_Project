import React, { useState } from 'react';
import {
	View,
	TextInput,
	Button,
	FlatList,
	Text,
	ActivityIndicator,
	TouchableOpacity,
	StyleSheet
} from 'react-native';
import { searchMovies } from '../services/tmdb';

export default function TelaInicial({ navigation }) {
	const [query, setQuery] = useState('');
	const [loading, setLoading] = useState(false);
	const [loadingMore, setLoadingMore] = useState(false);
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [error, setError] = useState(null);

	const handleSearch = async () => {
		if (!query.trim()) return;
		setLoading(true);
		setError(null);
		try {
			const res = await searchMovies(query, 1);
			setData(res.results || []);
			setPage(res.page || 1);
			setTotalPages(res.total_pages || 1);
		} catch (e) {
			setError('Erro ao buscar filmes. Tente novamente.');
		} finally {
			setLoading(false);
		}
	};

	const loadMore = async () => {
		if (loadingMore) return;
		if (page >= totalPages) return;
		setLoadingMore(true);
		try {
			const next = page + 1;
			const res = await searchMovies(query, next);
			setData(prev => [...prev, ...(res.results || [])]);
			setPage(res.page || next);
			setTotalPages(res.total_pages || totalPages);
		} catch (e) {
			// não sobrescrever o estado principal de erro para evitar UX intrusiva
		} finally {
			setLoadingMore(false);
		}
	};

	const renderItem = ({ item }) => (
		<TouchableOpacity
			style={styles.item}
			onPress={() => navigation.navigate('Detalhes', { movieId: item.id })}
		>
			<Text style={styles.title}>{item.title}</Text>
			<Text style={styles.sub}>{item.release_date}</Text>
			{item.overview ? <Text numberOfLines={2}>{item.overview}</Text> : null}
		</TouchableOpacity>
	);

		return (
			<View style={styles.container}>
				<View style={styles.searchRow}>
					<TextInput
						placeholder="Pesquisar filme..."
						value={query}
						onChangeText={setQuery}
						style={styles.input}
						returnKeyType="search"
						onSubmitEditing={handleSearch}
					/>
					<View style={styles.buttonWrapper}>
						<Button title="Buscar" onPress={handleSearch} disabled={loading} />
					</View>
				</View>

				{loading ? (
					<ActivityIndicator size="large" style={{ marginTop: 20 }} />
				) : error ? (
					<Text style={styles.error}>{error}</Text>
				) : (
					<FlatList
						data={data}
						keyExtractor={item => String(item.id)}
						renderItem={renderItem}
						onEndReached={loadMore}
						onEndReachedThreshold={0.5}
						ListFooterComponent={loadingMore ? <ActivityIndicator /> : null}
						keyboardShouldPersistTaps="handled"
						contentContainerStyle={{ paddingBottom: 24 }}
						style={{ flex: 1 }}
					/>
				)}
			</View>
		);
}

const styles = StyleSheet.create({
		container: { flex: 1, padding: 12 },
		searchRow: { flexDirection: 'row', marginBottom: 12, alignItems: 'center' },
		input: { flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 6, marginRight: 8 },
		buttonWrapper: { justifyContent: 'center' },
	item: { padding: 12, borderBottomWidth: 1, borderBottomColor: '#eee' },
	title: { fontWeight: 'bold' },
	sub: { color: '#666', marginBottom: 6 },
	error: { color: 'red', textAlign: 'center', marginTop: 20 }
});
