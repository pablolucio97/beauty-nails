import { NextPage } from 'next'
import Head from 'next/head'
import { staff } from '../data/data'

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
} from '../styles/equipe'


const Home: NextPage = () => {
    return (
        <Container>
            <Head>
                <title>Studio Beauty Nails | Equipe</title>
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
                        content='Equipe'
                    />
                    <Text
                        content='Nossa equipe é composta por nossas queridas profissionais Alícia, Raquel e Gabriele que dão um show quando o assunto é curidar de você. Toda nossa equipe possui sólida experiência com o trabalho de manicure e pediure. Conheça melhor nossa equipe:'
                    />
                </InfoSectionContainer>
            </InfoSection>
            <CardsSection>
                <CardsSectionContainer>
                    <CardsContainer>
                        {staff.map(person => (
                            <ImageContentCard
                                key={person.name}
                                title={person.name}
                                imgUrl={person.url}
                                content={person.testimonial}
                                cardClassName='staffCard'
                            />
                        ))}
                    </CardsContainer>
                </CardsSectionContainer>
            </CardsSection>
        </Container >
    )
}

export default Home