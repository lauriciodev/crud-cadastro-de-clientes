export const getLS = () => JSON.parse(localStorage.getItem ("dbCliente")) ?? [];
export const setLS = (cliente) => localStorage.setItem("dbCliente",JSON.stringify(cliente));
