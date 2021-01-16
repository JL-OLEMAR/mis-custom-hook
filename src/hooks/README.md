# Hooks

##  useCounter

Ejemplo de uso:
```
    const { counter, increment, decrement, reset } = useCounter(10);

    useCounter(); // recibe un valor por defecto
```


##  useFetch

Ejemplo de uso:
```
    const url = 'endpoint de una api';
    const { data: null, loading: true, error: null } = useFetch(url);

```


##  useForm

Ejemplo de uso:
```
    const initialForm = {
        name: '',
        age: 0,
        email: ''
    };

    const [ formValues, handleInputChange, reset ] = useForm(initialForm);
    
```
