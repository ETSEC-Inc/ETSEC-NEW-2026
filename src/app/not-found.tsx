import Link from "next/link";
import Icon from "@/components/Icon";
export default function NotFound() { return <main className="not-found-page"><div className="container-wide"><span className="eyebrow"><span className="eyebrow-line"/> PAGE NOT FOUND</span><h1>Lost in the <span className="text-gradient">network?</span></h1><p>The page you&apos;re looking for may have moved. Let&apos;s get you back on track.</p><Link className="btn btn-primary" href="/">Back to homepage <Icon name="arrow" size={18}/></Link><span className="error-number">404</span></div></main>; }
