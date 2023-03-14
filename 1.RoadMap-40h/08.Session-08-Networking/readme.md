# Networking

Call API trong ReactJS 

## Sử dụng `fetch()`

Phương thức GET

```js
const [posts, setPost] = useState([]);
useEffect(()=>{
    const fetchData = async () => {
        try{
            const result = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json());

            setPost(result);
        }.catch(function (error) {
            // handle error
            console.log(error);
        })
        
    }
   
    fetchData();

  },[]);
```

Phương thức POST

```js
const handleSubmit = async ()=> {
    try {
   
        const result = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json());

        console.log(result);
    }
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}
```

## Sử dụng Axios


Phương thức GET

```js
const [posts, setPost] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.data);

                if(data){
                    setPost(data);
                }
            }
           
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }
        fetchData();
    },[]);
```

Phương thức POST

```js
    const handleSubmit = async ()=> {
        try {
            await axios.post('https://jsonplaceholder.typicode.com/posts', {
                    title: 'foo',
                    body: 'bar',
                    userId: 1
            })
            .then(function (response) {
                    console.log(response);
                    return response.data;
            })
        }
        .catch(function (error) {
            console.log(error);
        });
    }
        
```