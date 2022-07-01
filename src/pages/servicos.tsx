import { NextPage } from 'next'
import Head from 'next/head'
import { nails } from '../data/data'

import { Container } from '../layout/styles'
import { Text } from '../components/Typography/Text'
import { Title } from '../components/Typography/Title'
import { ImageContentCard } from '../components/Cards/ImageContentCard'

import {
    CardsContainer,
    CardsSection,
    CardsSectionContainer,
    InfoSection,
    InfoSectionContainer
} from '../styles/servicos'


const Servicos: NextPage = () => {
    return (
        <Container>
            <Head>
                <title>Studio Beauty Nails | Serviços</title>
                {/* @ts-ignore */}
                <meta charset="UTF-8" />
                <meta name="description" content="Landing pages de alta conversão e sites institucionais para o seu negócio." />
                <meta name="keywords" content="pablosilvadev pablo silva psd landing pages" />
                <meta name='author' content='Pablo Silva' />
                <meta name="theme-color" content="#FF49C1" />
            </Head>
            <InfoSection>
                <InfoSectionContainer>
                    <Title
                        content='Serviços'
                    />
                    <Text
                        content='Nossos serviços são prestados com cuidados rigorosos e esterilização de equipamentos. Contamos com uma variedade de serviços para deixar suas unhas impecáveis. Conheça melhor nossos serviços:'
                    />
                </InfoSectionContainer>
            </InfoSection>
            <CardsSection>
                <CardsSectionContainer>
                    <CardsContainer>
                        {nails.map(nail => (
                            <ImageContentCard
                                key={nail.service}
                                title={nail.service}
                                imgUrl={nail.urlImage}
                                content={nail.description}
                                cardClassName='staffCard'
                            />
                        ))}
                    </CardsContainer>
                </CardsSectionContainer>
            </CardsSection>
        </Container >
    )
}

export default Servicos