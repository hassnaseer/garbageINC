import React from "react";
import img from '../Images/Images1/faq-header.webp'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function App() {
    return (
        <>
            <Navbar /><br /><br /><br /><br /><br />
            <div class="jumbotron jumbotron-fluid">
                <img src={img} class="img-fluid" alt="..." ></img>
            </div><br />
            <div className="container">
                <h1>FAQ</h1>
                <h5>Frequently Asked Questions</h5>
                <p>At Logity Dispatch, we welcome your questions. It’s part of our commitment to excellence in customer care and our dedication to honesty and transparency. Feel free to contact us, or see if your question is one we are frequently asked.</p> <br /><br />
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <b> What will Logity Dispatch services do for my business? </b>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Very simply, we buy you time so you can make more money. Most owners/operators get into this business to drive loads and make money, then find themselves bogged down by all the paperwork, regulatory requirements, and negotiations — things that keep you from doing what actually makes you money. By taking on all the business support activities you would like to offload, Logity Dispatch allows your business to run efficiently — and for you to take on more loads. In addition, when it comes to negotiating, we aim to get you the best rates for your loads, so you get to put more money in your pocket.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <b> Isn't it always easier and cheaper to hire and in-house dispatcher? </b>
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Surprisingly, no. If you want to recruit capable and competent talent, you need to develop and undergo a pretty vigorous recruitment process, which takes time and — if you need the services of headhunters — money. Even if you find what you are looking for, you will most likely need to provide office space — yet another expenditure — and in some cases, further training. Meanwhile, as many of our clients have admitted, hiring Logity Dispatch turns out to be more cost-effective than even having one full-time dispatcher. Our industry expertise, networks, and experience make us the best at what we do.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <b> Do I have to enter into a long-term contract with Logity Dispatcher? </b>
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Nope. You hire Logity Dispatch on a month-to-month basis. We don't make trucker drivers commit long-term upfront because we believe in earning your business. If you aren't happy, we aren't happy, so we'll work hard for you. But we also believe that all business owners should have the freedom to work with whomever they want. It's important for us to keep that freedom for you.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <b> How do I sign up with ypu, and what do I need? </b>
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Signing up with Logity Dispatch is a breeze since you can submit documents to us online. <br />

                                - First, you sign our Dispatch Carrier Agreement, a document that clearly sets out our responsibilities and our responsibilities. This is meant to protect both of us — it is not a long-term service contract by any means. Our services are month-to-month, and you are not penalized for discontinuing our service. <br /><br />

                                - You will also need insurance that names Logity Dispatch as the certificate holder. This is common industry practice for shippers, dispatchers, and brokers — it just allows us to conduct business at your behest and on your behalf when you want us to. Make sure the insurance sets out liability as well as cargo coverage. <br /><br />

                                - We also need the Carrier Set-Up Package and references for the shippers and brokers we work with and for our records. Your MC Permit and signed W9 form should be here as well. <br /><br />

                                - At Logity Dispatch, we keep impeccable and accurate records — and always maintain compliance with all safety, regulatory, and industry requirements — so we also need a copy of the CDL for each driver we will be dispatching. <br /><br />

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFive">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <b> Do I have to be working under my own MC authority to hire logity Dispatch?   </b>
                            </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                We work with owners/operators working under their own MC authorities — but also with carriers with company drivers.

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingSix">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                <b> Do I have to request insurance certificates every time? </b>
                            </button>
                        </h2>
                        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                No. Unless you have specifically instructed your insurance agent to process the certificate requests made by "the insured only" — you — we work with your insurance agent to get the insurance certificates with the certificate holder information.

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingSeven">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                <b> Will you work with me if I'm new to the business? </b>
                            </button>
                        </h2>
                        <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Absolutely. We love helping truck drivers and carriers in all stages of their careers. What we look for are keen, hardworking drivers, period. Realistically, if you are a new carrier, it may initially be harder for us to find you the best loads because most shippers and brokers prefer carriers with MC authorities more than six months to a year old. However, you can rest assured that Logity Dispatch will give it our all so you can make better money in your first year. Once you hit the one year milestone, access to better rates and loads will be even easier.

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingEight">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                <b> Can I choose Logity Dispatch services I want? </b>
                            </button>
                        </h2>
                        <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Yes. Many of our clients love our comprehensive service package — which includes dispatch, documentation, compliance, and all the business supports a carrier needs — but we also have clients who, say, just want assistance with documentation and paperwork. At Logity Dispatch, we believe our clients should have the freedom to do business as they see fit. After all, no one knows their business better than they do.
                                Have any other questions? Please don't hesitate to talk to us. We look forward to helping you grow your trucking business.

                            </div>
                        </div>
                    </div>
                </div>
            </div><br /><br />

            {/* <MDBContainer className="mt-5" style={{ maxWidth: '1000px' }}>
                <MDBAccordion alwaysOpen initialActive={1}>
                    <MDBAccordionItem collapseId={1} headerTitle="Question #1">
                        <strong>This is the first item's accordion body.</strong> It is shown
                        by default, until the collapse plugin adds the appropriate classes
                        that we use to style each element. These classes control the overall
                        appearance, as well as the showing and hiding via CSS transitions. You
                        can modify any of this with custom CSS or overriding our default
                        variables. It's also worth noting that just about any HTML can go
                        within the <code>.accordion-body</code>, though the transition does
                        limit overflow.
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={2} headerTitle="Question #2">
                        <strong>This is the second item's accordion body.</strong> It is
                        hidden by default, until the collapse plugin adds the appropriate
                        classes that we use to style each element. These classes control the
                        overall appearance, as well as the showing and hiding via CSS
                        transitions. You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just about any HTML
                        can go within the <code>.accordion-body</code>, though the transition
                        does limit overflow.
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={3} headerTitle="Question #3">
                        <strong>This is the third item's accordion body.</strong> It is hidden
                        by default, until the collapse plugin adds the appropriate classes
                        that we use to style each element. These classes control the overall
                        appearance, as well as the showing and hiding via CSS transitions. You
                        can modify any of this with custom CSS or overriding our default
                        variables. It's also worth noting that just about any HTML can go
                        within the <code>.accordion-body</code>, though the transition does
                        limit overflow.
                    </MDBAccordionItem>
                </MDBAccordion>
            </MDBContainer> */}
            <Footer />
        </>
    );
}