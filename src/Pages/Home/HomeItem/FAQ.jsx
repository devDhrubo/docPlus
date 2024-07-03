const FAQ = () => {
    return (
        <div className="px-[140px] mt-20">
            <div className="space-y-3 mb-5">
                <button className="btn btn-outline rounded-full px-5">FAQ</button>
                <h2 className="text-4xl font-semibold text-[#020043]">Frequntly Asked Question</h2>
            </div>
            <div>
                <div className="collapse collapse-arrow bg-[#FFFFF5] mb-2">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-lg font-medium"> What are your office hours?</div>
                    <div className="collapse-content text-gray-500">
                        <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#FFFFF5] mb-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-lg font-medium">How can I schedule an appointment?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#FFFFF5] mb-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-lg font-medium">Do you accept insurance?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#FFFFF5] mb-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-lg font-medium">What should I bring to my appointment?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#FFFFF5] mb-2">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-lg font-medium">Do you offer telemedicine appointments?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;