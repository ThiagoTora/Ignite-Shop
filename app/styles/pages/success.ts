import { styled } from "..";

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    height: 430,

    h1: {
        fontSize: '$2xl',
        color: '$gray100',
        maxWidth: 560,
        textAlign: 'center',


    },

    p: {
        fontSize: '$xl',
        color: '$gray300',
        marginTop: '2rem',
        lineHeight: 1.4,
    },

    a: {
        display: 'block',
        marginTop: '5rem',
        fontSize: 'lg',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover': {
            color: '$green300'
        }
    },
})

export const ImagesList = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '3rem',

  // Faz com que cada container de imagem "entre" no anterior
  'div + div': {
    marginLeft: '-52px',
  },
});

export const ImageContainer = styled('div', {
  width: 140,
  height: 140,
  background: 'linear-gradient(180deg, #1ea483 0%, #7565d4 100%)',
  // Deixa redondo
  borderRadius: '50%', 
  padding: '0.25rem',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)', 

  img: {
    objectFit: 'cover'
  }
})