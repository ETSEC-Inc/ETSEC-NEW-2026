import Icon from "@/components/Icon";

export default function HeroVisual() {
  return <div className="hero-visual" aria-label="Illustration of an integrated technology and security operations platform" role="img">
    <div className="hero-visual-glow" aria-hidden="true"/>
    <div className="visual-orbit orbit-one" aria-hidden="true"/><div className="visual-orbit orbit-two" aria-hidden="true"/>
    <div className="dash-window">
      <div className="dash-topbar"><div className="dash-dots"><i/><i/><i/></div><span className="dash-brand"><span className="mini-brand-icon"><Icon name="shield" size={12}/></span> ETSEC <b>STUDIO</b></span><span className="dash-status"><span className="pulse-green"/> ILLUSTRATIVE VIEW</span></div>
      <div className="dash-content"><div className="dash-sidebar"><div className="side-active"><Icon name="layers" size={16}/></div><div><Icon name="monitor" size={16}/></div><div><Icon name="shield" size={16}/></div><div><Icon name="brain" size={16}/></div><div><Icon name="target" size={16}/></div></div>
        <div className="dash-main"><div className="dash-heading"><div><small>OVERVIEW / INTELLIGENCE</small><strong>Digital operations</strong></div><span className="dash-live">● Concept preview</span></div>
          <div className="dash-metrics"><div className="dash-metric"><span>Security posture</span><strong>Monitored <Icon name="check-circle" size={13}/></strong><div className="metric-tiny-bars">{[35,52,46,72,60,82,76,94,88,100,82,99].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div></div><div className="dash-metric"><span>Build pipeline</span><strong>Ready <Icon name="check-circle" size={13}/></strong><div className="metric-progress"><i/></div><small>Design · Develop · Deploy</small></div></div>
          <div className="dash-chart"><div className="dash-chart-head"><span>System activity</span><span className="chart-legend"><i/> Operations</span></div><svg viewBox="0 0 360 100" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="fillLine" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#33cfb8" stopOpacity="0.25"/><stop offset="100%" stopColor="#33cfb8" stopOpacity="0"/></linearGradient></defs><path d="M0 24H360 M0 50H360 M0 76H360" stroke="currentColor" opacity=".07"/><path d="M0 72 C24 74 36 53 54 58S87 79 111 53S147 38 168 53S202 24 223 37S250 66 278 27S325 44 360 12V100H0Z" fill="url(#fillLine)"/><path d="M0 72 C24 74 36 53 54 58S87 79 111 53S147 38 168 53S202 24 223 37S250 66 278 27S325 44 360 12" stroke="#39d9c0" strokeWidth="2" fill="none" strokeLinecap="round"/><circle cx="360" cy="12" r="4" fill="#39d9c0"/></svg><div className="dash-chart-months"><span>09:00</span><span>11:00</span><span>13:00</span><span>15:00</span><span>17:00</span></div></div>
          <div className="dash-action-list"><div><span className="action-symbol mint"><Icon name="shield" size={14}/></span><span>Security monitoring</span><small>Active</small></div><div><span className="action-symbol blue"><Icon name="code" size={14}/></span><span>Application engineering</span><small>Ready</small></div><div><span className="action-symbol violet"><Icon name="brain" size={14}/></span><span>AI workflows</span><small>Connected</small></div></div>
        </div>
      </div>
    </div>
    <div className="floating-chip floating-chip-top"><span className="chip-icon"><Icon name="shield" size={17}/></span><span><strong>Security-first</strong><small>By design</small></span><Icon name="check-circle" size={16}/></div>
    <div className="floating-chip floating-chip-bottom"><span className="chip-icon purple"><Icon name="spark" size={17}/></span><span><strong>AI + Engineering</strong><small>Built to scale</small></span><span className="chip-signal"><i/><i/><i/></span></div>
    <div className="visual-cross cross-one">+</div><div className="visual-cross cross-two">+</div>
  </div>;
}
