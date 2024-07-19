import { Title } from "../components/styled-components/Title"
import { Text } from "../components/styled-components/Text"
import { SmallText } from "../components/styled-components/SmallText"
import { ContainerFlex } from "../components/styled-components/ContainerFlex"
import { ContainerContent } from "../components/styled-components/ConteinerContent"
import { LoginCard } from "../components/styled-components/LoginCard"
import { Card } from "../components/styled-components/Card"
import { SubTitle } from "../components/styled-components/SubTitle"
import { Label } from "../components/styled-components/Label"
import { Input } from "../components/styled-components/Input"
import { Button } from "../components/styled-components/Button"
import { LoginForm } from "../components/styled-components/LoginForm"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../configs/services/growtwetter-api/auth.service"

export function Login(){
    const navegate = useNavigate()
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        //criar um objeto JS
        const credentials = {
            email: event.currentTarget.email.value,
            password: event.currentTarget.password.value
        }   
        const resultado = await login(credentials)

        if(!resultado.ok){
            alert(resultado.message);
            return;
        }
        localStorage.setItem('authToken', JSON.stringify(resultado.authToken));
        navegate('/feed')

    }

    return(
        <>
            <ContainerFlex>
                <LoginCard className="login-card">
                    <ContainerContent>
                        <Title>Growtwitter</Title>
                        <SmallText>Trabalho final do bloco intermediário</SmallText>
                        <Text>O Growtwitter é a plataforma definitiva para todos os apaixonados por redes sociais que buscam uma experiência familiar e poderosa, semelhante ao Twitter, mas com um toque único. Seja parte desta comunidade que valoriza a liberdade de expressão, a conexão com pessoas de todo o mundo e a disseminação de ideias.</Text>
                    </ContainerContent>
                    <LoginForm>
                        <Card>
                            <SubTitle>Entrar no Growtwitter</SubTitle>
                            <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                                <div style={{width:"100%", position: "relative"}}>
                                <Label htmlFor="email">Email</Label>

                                <Input type="email" name="email" id="email" required />
                                </div>
                                <div style={{width:"100%", position: "relative"}}>
                                <Label htmlFor="password">Password</Label>

                                <Input type="password" name="password" id="password" required />
                                </div>
                                
                                <Button type="submit">Entrar</Button>
                            </form>
                            <div>
                                <small>Não é cadastrado? <Link to={'/'}>Cadastre-se aqui</Link></small>
                            </div>
                        </Card>
                    </LoginForm>                    
                </LoginCard>
            </ContainerFlex>
        </>
    )
}