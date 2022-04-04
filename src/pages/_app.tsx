import SSRProvider from 'react-bootstrap/SSRProvider';
import { AuthProvider } from '../contexts/AuthContext';
import { AnnouncementProvider } from '../contexts/AnnouncementContext';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import '../styles/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'react-loading-skeleton/dist/skeleton.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { MotorcycleProvider } from '../contexts/MotorcycleContext';
import { ModalActionProvider } from '../contexts/ModalActionContext';
import { UserProvider } from '../contexts/UserContext';
import { GalleryProvider } from '../contexts/GalleryContext';
import { CarProvider } from '../contexts/CarContext';
import { ModalAction } from '../components/ModalAction';
import { FilterProvider } from "../contexts/FilterContext";
import { AlertProvider } from '../contexts/AlertContext';
import { Alert } from '../components/Alert';
import ImgDefault from "../assets/image-default.png";
import Head from 'next/head';
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Head>
        <title>PortalAutos - Encontre veículos em Catalão e região.</title>
        <meta name="description" content="Se você está procurando o carro ou moto perfeito para a sua vida e não quer pagar rios de dinheiro por isso, nós podemos te ajudar! O PortalAutos oferece a você uma forma de encontrar o seu veículo ideal de forma rápida, fácil e segura." />
        <meta property="og:image" content={`https://portalcatalao.com.br/${ImgDefault.src}`} />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ModalActionProvider>
          <FilterProvider>
            <GalleryProvider>
              <AnnouncementProvider>
                <UserProvider>
                  <CarProvider>
                    <MotorcycleProvider>
                      <AuthProvider>
                        <AlertProvider>
                          <Component {...pageProps} />
                          <Alert />
                        </AlertProvider>
                        <ModalAction />
                      </AuthProvider>
                    </MotorcycleProvider>
                  </CarProvider>
                </UserProvider>
              </AnnouncementProvider>
            </GalleryProvider>
          </FilterProvider>
        </ModalActionProvider>
      </QueryClientProvider>
    </SSRProvider>
  )
}

export default MyApp
