import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { NextImage } from '../components/Next/NextImage'

import {
  BannerSection,
  BannerSectionContainer,
  BannerSectionContentContainer,
  BannerSectionImageContainer,
  Container,
  IntroductionSection,
  IntroductionSectionContainer,
  IntroductionSectionContentContainer,
  IntroductionSectionImageContainer,
  StudioSection,
  StudioSectionContainer,
  StudioSectionContentContainer,
  StudioSectionImageContainer,
  TestimonialsCardsContainer,
  TestimonialsSection,
  TestimonialsSectionContainer
} from '../styles'

import { RevealFade } from '../components/Animations/RevealFade'
import { TestimonialCard } from '../components/Cards/TestimonialCard'
import { Text } from '../components/Typography/Text'
import { Title } from '../components/Typography/Title'

import { testimonials } from '../data/data'
import { NextLink } from '../components/Next/NextLink'
import { SubTitle } from '../components/Typography/SubTitle'
import { PrimaryButton } from '../components/Elements/PrimaryButton'
import { MdCall } from 'react-icons/md'
import { GradientText } from '../components/Typography/GradientText'
import { useTheme } from 'styled-components'


const Home: NextPage = () => {

  function startChat(whatsappContact: string) {
    window.open(`http://api.whatsapp.com/send?phone=55${whatsappContact}`)
  }

  const theme = useTheme()

  return (
    <Container>
      <Head>
        <title>Danilo Fotografias | Home</title>
        {/* @ts-ignore */}
        <meta charset="UTF-8" />
        <meta name="description" content="Landing pages de alta conversão e sites profissionais" />
        <meta name="keywords" content="pablosilvadev pablo silva psd landing pages site institucional profissional " />
        <meta name='author' content='Pablo Silva' />
        <meta name="theme-color" content="#000000" />
      </Head>
      <BannerSection id='home'>
        <BannerSectionContainer>
          <BannerSectionContentContainer>
            <GradientText
              content='Beauty Nails'
              direction='left-to-right'
              initialColor={theme.colors.primary}
              finalColor={theme.colors.primary_dark}
            />
            <Text
              content='Seus pés e mãos sempre bem cuidados!'
              style={{ color: theme.colors.white200 }}
            />
            <PrimaryButton
              title='Iniciar conversa'
              onClick={() => startChat('31985187963')}
              ariaLabel='Iniciar conversa'
              className='whatsappButton'
              size='large'
              icon={
                <MdCall
                  size={16}
                  style={{
                    marginRight: 4
                  }}
                />
              }
            />
          </BannerSectionContentContainer>
          <BannerSectionImageContainer>
            <NextImage
              height={280}
              width={320}
              imgUrl='/images/hand2.png'
            />
          </BannerSectionImageContainer>
        </BannerSectionContainer>
      </BannerSection>
      <IntroductionSection id='sobrenos'>
        <IntroductionSectionContainer>
          <IntroductionSectionImageContainer>
            <RevealFade>
              <NextImage
                imgUrl='/images/studio1.jpg'
                width={400}
                height={480}
              />
            </RevealFade>
          </IntroductionSectionImageContainer>
          <IntroductionSectionContentContainer>
            <Title
              content='Quem somos nós'
            />
            <RevealFade>
              <Text
                content='Três amigas com anos de experiência em pedicure e manicure decidiram se reunir para fazerem o que sabem fazer de melhor, cuidar de suas unhas! Nasce então o Beauty Nails, seu stúdio de serviço de manicure e pedicure. '
              />
              <Text
                content='Alícia, Gabriele e Raquel são as profissionais que irão te proporcionar a melhor experiência com o tratamento de suas unhas.'
              />
              <NextLink
                title='Conheça melhor nossos serviços'
                url='/servicos'
                openInSameWindow
              />
            </RevealFade>
          </IntroductionSectionContentContainer>
        </IntroductionSectionContainer>
      </IntroductionSection>
      <StudioSection id='sobrenos'>
        <StudioSectionContainer>
          <StudioSectionContentContainer>
            <Title
              content='Nosso stúdio'
            />
            <RevealFade>
              <Text
                content='Nosso estúdio é composto com o que há de melhor no mercado de cosméticos para prover o melhor serviço possível.'
              />
              <Text
                content='Tudo é feito com esterilização de ferramentas e o descarte correto dos materiais. Zelamos pela máxima higiene pensando sempre na sua saúde e satisfação.'
              />
            </RevealFade>
          </StudioSectionContentContainer>
          <StudioSectionImageContainer>
            <RevealFade>
              <NextImage
                imgUrl='/images/studio2.jpg'
                width={400}
                height={400}
              />
            </RevealFade>
          </StudioSectionImageContainer>
        </StudioSectionContainer>
      </StudioSection>
      <TestimonialsSection id='oquedizem'>
        <TestimonialsSectionContainer>
          <Title
            content='O que nossas clientes dizem'
          />
          <TestimonialsCardsContainer>
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                personName={testimonial.name}
                personPhotoUrl={testimonial.url}
                testimonial={testimonial.testimonial}
                cardClassName='testimonialCard'
              />
            ))}
          </TestimonialsCardsContainer>
        </TestimonialsSectionContainer>
      </TestimonialsSection>
    </Container >
  )
}

export default Home