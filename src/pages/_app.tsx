import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import NProgress from "nprogress";
import SSRProvider from 'react-bootstrap/SSRProvider';
import { AuthProvider } from '../contexts/AuthContext';
import { AnnouncementProvider } from '../contexts/AnnouncementContext';
import jwt from 'jsonwebtoken';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import '../styles/globals.css';
import '../styles/nprogress.css';
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
import { Loading } from '../components/Loading';
import {Session} from "../entities/Session";
import {parseCookies, setCookie} from "nookies";
import {api} from "../services/api";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      setLoading(true);
      NProgress.start();
    };
    const handleStop = () => {
      setLoading(false);
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  return (
    <SSRProvider>
      <Head>
        <title>PortalAutos - Compre, venda e financie carros usados, novos e motos.</title>
        <meta name="description" content="Se você está procurando o carro ou moto perfeito para a sua vida e não quer pagar rios de dinheiro por isso, nós podemos te ajudar! O PortalAutos oferece a você uma forma de encontrar o seu veículo ideal de forma rápida, fácil e segura." />
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
                          {loading && <Loading />}
                        </AlertProvider>
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
