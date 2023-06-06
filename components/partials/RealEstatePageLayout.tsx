import { ReactNode, useCallback, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Dropdown from "react-bootstrap/Dropdown"
import Button from "react-bootstrap/Button"
import Badge from "react-bootstrap/Badge";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ImageLoader from "../ImageLoader"
import StickyNavbar from "../StickyNavbar"
import StarRating from "../StarRating"
import SignInModalLight from "../partials/SignInModalLight"
import SignUpModalLight from "../partials/SignUpModalLight"
import ScheduleTourButton from "../ScheduleTourButton";
import Cart from "../Cart";
import useAuthContext from "../../state/AuthStateProvider/useAuthContext";

// Links
const footerLinks = [
  [{
    title: "Links", items: [
      { title: "Home", href: "/" },
      { title: "Medical Rooms", href: "/rooms" },
      { title: "Services", href: "/services" },
      { title: "Blog", href: "/" },
      { title: "Directory", href: "/" },
    ]
  }],
  [{
    title: "Company", items: [
      { title: "Company", href: "/" },
      {
        title: "Careers",
        href: "/",
        decorator: "<span class='badge rounded-pill bg-warning text-dark'>We're hiring</span>"
      },
      { title: "Contacts", href: "/" },
      { title: "Security", href: "/" },
    ]
  }],
  [{
    title: "Featured Services", items: [
      { title: "Web & Mobile Dev", href: "/" },
      { title: "Local Digital Marketing", href: "/" },
      { title: "China Marketing ", href: "/" },
      { title: "MSO Services", href: "/" },
      { title: "Digital Content Creation", href: "/" },
    ]
  }],
  [
    {
      title: "Legal", items: [
        { title: "Terms of Use", href: "/" },
        { title: "Privacy Policy", href: "/" },
      ]
    },
    {
      title: "Docs", items: [
        { title: "Documentation", href: "/" },
        { title: "Snippets", href: "/" },
      ]
    }
  ]
]

interface IProps {
  pageTitle: string;
  activeNav: string;
  navbarExtraClass?: string;

  children: ReactNode;
}

const RealEstatePageLayout = ({ pageTitle, activeNav, navbarExtraClass, children }: IProps) => {
  const { user, isAuthReady, logout } = useAuthContext()
  // Sign in modal
  const [signInShow, setSignInShow] = useState(false)
  const [signUpShow, setSignUpShow] = useState(false)

  const handleSignInClose = useCallback(() => setSignInShow(false), []);
  const handleSignInShow = useCallback(() => setSignInShow(true), []);
  const handleSignupClose = useCallback(() => setSignUpShow(false), []);
  const handleSignInToUp = useCallback(() => {
    setSignInShow(false)
    setSignUpShow(true)
  }, []);
  const handleSignUpToIn = useCallback(() => {
    setSignInShow(true)
    setSignUpShow(false)
  }, []);


  return (
    <>
      <Head>
        <title>{`MedicalBoulevard | ${pageTitle}`}</title>
      </Head>

      {/* Sign in modal */}
      {!user && <SignInModalLight
        centered
        size='lg'
        show={signInShow}
        onHide={handleSignInClose}
        onSwap={handleSignInToUp}
      />}

      {/* Sign up modal */}
      {!user && <SignUpModalLight
        centered
        size='lg'
        show={signUpShow}
        onHide={handleSignupClose}
        onSwap={handleSignUpToIn}
      />}


      {/* Page wrapper for sticky footer
      Wraps everything except footer to push footer to the bottom of the page if there is little content */}
      <main className='page-wrapper'>

        {/* Navbar (main site header with branding and navigation) */}
        <Navbar as={StickyNavbar}
                expand='lg'
                bg='light'
                className={`fixed-top${navbarExtraClass ? ` ${navbarExtraClass}` : ''}`}
        >
          <Container>
            <Navbar.Brand as={Link as any} href='/' className='me-3 me-xl-4'>
              <ImageLoader
                priority
                src='/images/logo/medical_blvd_inc_logo.png'
                width={257}
                height={58}
                placeholder={"blur"}
                alt='MedicalBoulevard'
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarNav' className='ms-auto'/>

            {/* Display content depending on user auth status  */}
            {/* {isAuthReady && (
              <>
                {user ? (
                  <Dropdown className='d-none d-lg-block order-lg-3 my-n2 me-3'>
                    <Dropdown.Toggle as={Link} href='/real-estate/account-info'
                                     className='nav-link dropdown-toggle-flush d-flex py-1 px-0'
                                     style={{ width: '40px' }}>
                      <ImageLoader
                        src='/images/avatars/30.jpg'
                        width={80} height={80}
                        placeholder={"blur"}
                        className='rounded-circle' alt='Annette Black'
                      />
                    </Dropdown.Toggle>
                    <Dropdown.Menu renderOnMount align='end'>
                      <div className='d-flex align-items-start border-bottom px-3 py-1 mb-2' style={{ width: '16rem' }}>
                        <ImageLoader
                          src='/images/avatars/03.jpg'
                          width={48} height={48}
                          placeholder={"blur"}
                          className='rounded-circle' alt='Annette Black'
                        />
                        <div className='ps-2'>
                          <h6 className='fs-base mb-0'>Annette Black</h6>
                          <StarRating size='sm' rating={5}/>
                          <div className='fs-xs py-2'>
                            (302) 555-0107<br/>annette_black@email.com
                          </div>
                        </div>
                      </div>
                      <Dropdown.Item as={Link} href='/real-estate/account-info'>
                        <i className='fi-lock opacity-60 me-2'></i>
                        Personal Info
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} href='/real-estate/account-security'>
                        <i className='fi-heart opacity-60 me-2'></i>
                        Password &amp; Security
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} href='/real-estate/account-properties'>
                        <i className='fi-home opacity-60 me-2'></i>
                        My Properties
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} href='/real-estate/account-wishlist'>
                        <i className='fi-heart opacity-60 me-2'></i>
                        Wishlist
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} href='/real-estate/account-reviews'>
                        <i className='fi-star opacity-60 me-2'></i>
                        Reviews
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} href='/real-estate/account-notifications'>
                        <i className='fi-bell opacity-60 me-2'></i>
                        Notifications
                      </Dropdown.Item>
                      <Dropdown.Divider/>
                      <Dropdown.Item as={Link} href='/real-estate/help-center'>Help</Dropdown.Item>
                      <Dropdown.Item as={Button} onClick={logout}>Sign Out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Button variant='sm text-primary d-none d-lg-block order-lg-3' onClick={handleSignInShow}>
                    <i className='fi-user me-2'></i>
                    Sign in
                  </Button>
                )}
              </>
            )} */}

            {/* <OverlayTrigger
              trigger='click'
              placement='auto'
              overlay={
                <Popover style={{ maxWidth: "479px" }}>
                  <Popover.Body>
                    <Cart/>
                  </Popover.Body>
                </Popover>
              }
            >
              <Button variant='outline-primary btn-icon border-0 mx-2 position-relative'
                      className='order-lg-3'>
                <i className='fi-cart'></i>
                <Badge pill bg="warning" className='position-absolute'
                       style={{ fontSize: '0.4rem', right: '5px', top: '7px' }}
                > 1 </Badge>
              </Button>
            </OverlayTrigger> */}


            <ScheduleTourButton className={"order-lg-3"}/>

            <Navbar.Collapse id='navbarNav' className='order-md-2'>
              <Nav navbarScroll style={{ maxHeight: '35rem' }}>
                <Nav.Item>
                  <Nav.Link active={activeNav === '/'} href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link active={activeNav === '/rooms'} href="/rooms">Medical Rooms</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link active={activeNav === '/services'} href="/services">Services</Nav.Link>
                </Nav.Item>
                <Nav.Item className={"d-none"}>
                  <Nav.Link active={activeNav === '/directory'} href="/directory">Directory</Nav.Link>
                </Nav.Item>
                <Nav.Item className={"d-none"}>
                  <Nav.Link active={activeNav === '/blog'} href="/blog">Blog</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link active={activeNav === '/contacts'} href="/contacts">Contact</Nav.Link>
                </Nav.Item>

                {isAuthReady && (
                  <>
                    {
                      user ? (
                        <Nav.Item as={Dropdown} className='d-lg-none'>
                          <Dropdown.Toggle as={Nav.Link} className='d-flex align-items-center'>
                            <ImageLoader
                              src='/images/avatars/30.jpg'
                              width={30} height={30}
                              placeholder={"blur"}
                              className='rounded-circle' alt='Annette Black'
                            />
                            <span className='ms-2'>Annette Black</span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <div className='ps-3'>
                              <StarRating size='sm' rating={5}/>
                              <div className='fs-xs py-2'>
                                (302) 555-0107<br/>annette_black@email.com
                              </div>
                            </div>
                            <Dropdown.Item as={Link} href='/real-estate/account-info'>
                              <i className='fi-user opacity-60 me-2'></i>
                              Personal Info
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} href='/real-estate/account-security'>
                              <i className='fi-heart opacity-60 me-2'></i>
                              Password &amp; Security
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} href='/real-estate/account-properties'>
                              <i className='fi-home opacity-60 me-2'></i>
                              My Properties
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} href='/real-estate/account-wishlist'>
                              <i className='fi-heart opacity-60 me-2'></i>
                              Wishlist
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} href='/real-estate/account-reviews'>
                              <i className='fi-star opacity-60 me-2'></i>
                              Reviews
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} href='/real-estate/account-notifications'>
                              <i className='fi-bell opacity-60 me-2'></i>
                              Notifications
                            </Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item as={Link} href='/real-estate/help-center'>Help</Dropdown.Item>
                            <Dropdown.Item as={Button} onClick={logout}>Sign Out</Dropdown.Item>
                          </Dropdown.Menu>
                        </Nav.Item>
                      ) : (
                        <Nav.Item className='d-lg-none'>
                          <Nav.Link onClick={handleSignInShow}>
                            <i className='fi-user me-2'></i>
                            Sign in
                          </Nav.Link>
                        </Nav.Item>
                      )
                    }
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Page content, py-5 to skip navbar */}
        <div className={'py-5'}>
          {children}
        </div>
      </main>


      {/* Footer */}
      <footer className="footer bg-primary pt-5 text-secondary">
        <Container className='pt-lg-4 pb-4'>
          <Row className='mb-5 pb-md-3 pb-lg-4'>
            <Col xs={12} className='mb-lg-0 mb-4'>
              <div className='d-flex flex-sm-row flex-column justify-content-between mx-n2'>

                {/* Logo + contacts */}
                <div className='mb-sm-0 mb-4 px-2'>
                  <Link href="/" className='d-inline-flex mb-2'>
                    <ImageLoader
                      priority
                      src='/images/logo/mdb-footer-logo.png'
                      width={244} height={118}
                      placeholder={"blur"}
                      alt='MedicalBoulevard'
                    />
                  </Link>
                  <div className="pt-2 d-flex flex-row justify-content-center">
                    <Button as={Link as any} href="https://www.facebook.com/medicalblvd" className="btn-social-icon">
                      <i className="fa-brands fa-facebook"></i>
                    </Button>
                    <Button as={Link as any} href="https://twitter.com/medboulevard" className="btn-social-icon">
                      <i className="fa-brands fa-twitter"></i>
                    </Button>
                    <Button as={Link as any} href="https://www.instagram.com/medicalboulevard/" className="btn-social-icon">
                      <i className="fa-brands fa-instagram"></i>
                    </Button>
                    <Button as={Link as any} href="https://www.linkedin.com/company/medicalblvd" className="btn-social-icon">
                      <i className="fa-brands fa-linkedin"></i>
                    </Button>
                  </div>
                </div>

                {/* Quick links */}
                {footerLinks.map((section, index) => (
                  <div key={index}>
                    {section.map((block, i) => (
                      <div className={`mb-sm-0 px-2 ${i > 0 && "mt-4"}`} key={block.title}>
                        <h4 className="fs-xs text-secondary fw-normal mb-4" style={{
                          textDecorationLine: "underline",
                          textTransform: "uppercase"
                        }}>
                          {block.title}
                        </h4>
                        <Nav className="flex-column">
                          {block.items.map((l) => (
                            <Nav.Item className="my-1" key={l.title}>
                              <Nav.Link as={Link} href={l.href} active={activeNav === l.href}
                                        className="p-0 fs-sm text-secondary fw-normal">
                                {l.title}
                                {l.decorator && (
                                  <div className="d-inline ms-1"
                                       dangerouslySetInnerHTML={{ __html: l.decorator }}></div>)}
                              </Nav.Link>
                            </Nav.Item>
                          ))}
                        </Nav>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Col>
          </Row>

          {/* Copyright */}
          <div className="d-flex flex-row justify-content-between">
            <p>© Medical Boulevard Inc. 2023.</p>
            <p>All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </>
  )
}

export default RealEstatePageLayout
