import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const PrivacyModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const policyText = (
        <p>
         Since the privacy policy is a legal document, it can be tricky to understand as a retailer and confusing to write by yourself.
         You have to assess how you treat customer data, all while making sure that you’re acting in line with government regulations.
         Plus, you have to communicate your policy in a clear and transparent way that customers can understand.

        Writing and implementing a privacy policy is no easy task, 
        but the tips below will help you understand exactly what an ecommerce privacy policy is, 
        why you need to create one, what your privacy policy should include, what data to collect, and how to comply with international guidelines.
        </p>
    );
    return (
        <>
            <button className="item1" onClick={() => setOpen(true)}>
                Privacy Policy
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2>Privacy Policy</h2>
                {policyText}
                {policyText}
            </Modal>
        </>
    );
};

export default PrivacyModal;
