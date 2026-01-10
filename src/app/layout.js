import "../responsive_global.css";
import ResponsiveNav from "../components/ResponsiveNav";
import ResponsiveFooter from "../components/ResponsiveFooter";

export const metadata = {
    title: "수학의힘 세종 소담점 - 맞춤식 수학 학습",
    description: "진단→개별맞춤→오답코칭 루프로 매주 성장합니다. 학부모 리포트로 변화가 보입니다.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <body>
                {/* Nav needs to know the current page, but in Next.js layout persists. 
             We might need a client wrapper to pass pathname to Nav if it highlights active link.
             For now, let's just render it. The Nav can use usePathname hook internally. */}
                <ResponsiveNav />
                {children}
                <ResponsiveFooter />
            </body>
        </html>
    );
}
