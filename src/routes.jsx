import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import Community from './pages/Community.jsx'
import Contact from './pages/Contact.jsx'
import GuidePage from './pages/GuidePage.jsx'
import LegalPage from './pages/LegalPage.jsx'
import NotFound from './pages/NotFound.jsx'

const guide = (slug) => ({ path: slug, element: <GuidePage slug={slug} /> })

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'blog', element: <Blog /> },
      { path: 'community', element: <Community /> },
      { path: 'contact', element: <Contact /> },

      guide('lake-travel-guides'),
      guide('canoe-beginner-tips'),
      guide('scenic-waterways'),
      guide('outdoor-retirement-life'),
      guide('camping-and-cabins'),
      guide('senior-adventure-stories'),

      { path: 'legal/privacy', element: <LegalPage doc="privacy" /> },
      { path: 'legal/terms', element: <LegalPage doc="terms" /> },
      { path: 'legal/refund', element: <LegalPage doc="refund" /> },

      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
