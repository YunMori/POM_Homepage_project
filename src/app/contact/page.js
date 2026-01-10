import "../../pages/Contact.css";
import ContactClient from "../../components/ContactClient";

export const metadata = {
    title: "상담 문의 - 수학의힘",
    description: "수학의힘 세종 소담점 상담 문의 및 위치 안내",
};

export default function Contact() {
    return (
        <main className="contact-page contact-main">
            {/* Header Section */}
            <section className="contact-header-section">
                <div className="container">
                    <h1 className="contact-page-title">Contact</h1>
                    <p className="contact-page-subtitle">
                        수학의힘에 더 자세한 소식을 알고 싶으시다면?
                    </p>
                </div>
            </section>

            <ContactClient />
        </main>
    );
}
