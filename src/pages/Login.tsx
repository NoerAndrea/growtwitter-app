import { Title } from "../components/styled-components/Title"
import { Text } from "../components/styled-components/Text"
import { SmallText } from "../components/styled-components/SmallText"
import { ContainerFlex } from "../components/styled-components/Container"
import { ContainerContent } from "../components/styled-components/ConteinerContent"
import { LoginCard } from "../components/styled-components/LoginCard"
import { Card } from "../components/styled-components/Card"
import { SubTitle } from "../components/styled-components/SubTitle"
import { Label } from "../components/styled-components/Label"
import { Input } from "../components/styled-components/Input"
import { Button } from "../components/styled-components/Button"
import { LoginForm } from "../components/styled-components/LoginForm"

export function Login(){
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
                            <form style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                                <div style={{width:"100%", position: "relative"}}>
                                <Label>Username</Label>
                                <Input></Input>
                                </div>
                                <div style={{width:"100%", position: "relative"}}>
                                <Label>Password</Label>
                                <Input></Input>
                                </div>
                                
                                <Button>Entrar</Button>
                            </form>
                        </Card>
                    </LoginForm>                    
                </LoginCard>
            </ContainerFlex>
        </>
    )
}