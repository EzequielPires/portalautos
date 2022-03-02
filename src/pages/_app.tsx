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

import 'bootstrap/dist/css/bootstrap.min.css';
import { MotorcycleProvider } from '../contexts/MotorcycleContext';
import { ModalActionProvider } from '../contexts/ModalActionContext';
import { UserProvider } from '../contexts/UserContext';
import { GalleryProvider } from '../contexts/GalleryContext';
import { CarProvider } from '../contexts/CarContext';
import { ModalAction } from '../components/ModalAction';
import {FilterProvider} from "../contexts/FilterContext";
import {Filter} from "../components/Filter";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <QueryClientProvider client={queryClient}>
        <ModalActionProvider>
          <FilterProvider>
            <GalleryProvider>
              <AnnouncementProvider>
                <UserProvider>
                  <CarProvider>
                    <MotorcycleProvider>
                      <AuthProvider>
                        <Component {...pageProps} />
                        <Filter />
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
const fs = require('fs');
export function getStaticProps() {
  fs
  return { props: { msg: 'hello world' } }
}

export default MyApp
