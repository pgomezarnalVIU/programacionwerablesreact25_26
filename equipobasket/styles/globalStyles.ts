import { StyleSheet } from 'react-native';

export const  globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#939393",
    flexGrow: 1,
    justifyContent: "center",
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  loadingText: {
    marginTop: 12,
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
  card: {
    width: "47%",
    height: 160,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#ddd",
    elevation: 4,
  },
  cardEquipo: {
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: "#ddd",
    padding: 12,
    elevation: 4,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imageBorder: {
    borderRadius: 16,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    padding: 12,
  },
  cardText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
    button: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#111827',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
    listContent: {
    padding: 16,
    gap: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  detail: {
    fontSize: 14,
    marginBottom: 4,
  },
  containerForm: {
    flex: 1,
  },
  form: {
    padding: 16,
    gap: 16,
  },
  titleField: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  field: {
    gap: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#ffffff',
    fontSize: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  error: {
    color: '#dc2626',
    fontSize: 14,
  },
  buttonForm: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#111827',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonTextForm: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});