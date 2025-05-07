import ocean from '/images/ocean.jpg';
import logo from '/images/eco-logo.png';

export default function Hero() {
  return (
    <section className="bg-[#2b1f1a] text-white text-center p-6">
      <h1 className="text-6xl font-bold text-blue-300 mb-4">EcoCurrent</h1>
      <img src={ocean} alt="ocean" className="mx-auto w-full max-w-4xl rounded" />
      
      <div className="my-8 max-w-3xl mx-auto text-left space-y-4 text-base">
        <p>
          In today's world, plastic pollution poses a serious threat to both the environment and human health. EcoCurrent is a student research team that explores the topic of plastic waste through the lenses of chemistry and geography. By examining the impact of sustainable solutions and presenting thoroughly-conducted reports, EcoCurrent creates new ways to reduce environmental impact. Our journey includes data collection, chemical experiments, case interviews, lab studies, and more. 藉由跨科的合作，EcoCurrent 融合地理與化學的視角，提出有效的塑膠污染解方，藉由文獻探討、實驗與 GIS 分析，試圖為微塑膠汙染問題提供具體的解方。
        </p>
      </div>

      <img src={logo} alt="EcoCurrent logo" className="w-28 mx-auto my-6" />
      
      <h2 className="text-2xl font-semibold text-white mt-8">Groups</h2>
      <div className="mt-4">
        <button className="border border-blue-400 text-blue-300 px-6 py-2 rounded-full text-lg font-semibold">
          poppers
        </button>
      </div>
    </section>
  );
}