import react from 'react';

const Activation = () => {
    const (activation_token) = useParams();
    const [error, setError] = useState(false);
    
    useEffect(() => {
        if(activation_token){
            const activationEmail = async () => {
                try {
                    const res = await axios.post(`${server}/activation`, {
                        activation_token,
                    });
                    console.log(error.response.data.message);
                };
            };
        }
    }, [third])
    
    return (
        <div>Activation</div>
    )
}

export default Activation