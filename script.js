const topics = [
  {
    id: "matter-mole",
    icon: "🧪",
    title: "物质的分类及转化 物质的量",
    desc: "分类观、转化观、阿伏加德罗常数、气体摩尔体积和溶液浓度是计算题的起点。",
    tags: ["物质分类", "物质的量", "浓度计算"],
    formulas: ["n=m/M", "N=nNA", "气体：n=V/Vm（标况 Vm=22.4 L·mol⁻¹）", "c=n/V", "稀释：c1V1=c2V2"],
    equations: ["CO2+Ca(OH)2=CaCO3↓+H2O", "CaCO3+2HCl=CaCl2+CO2↑+H2O", "Na2CO3+2HCl=2NaCl+CO2↑+H2O"],
    experience: ["先判断研究对象，再把质量、粒子数、气体体积统一换成 n。", "分类题抓标准：组成、性质、分散系粒径、能否电离。", "计算题单位先统一，体积用 L，质量用 g，浓度用 mol·L⁻¹。"],
    mnemonic: ["见量先想 n，见气先看况；浓度乘体积，粒子乘常数。", "混合物看成分，纯净物看化学式。"],
    types: ["阿伏加德罗常数正误判断：逐项检查状态、物质结构、反应程度。", "溶液配制与稀释：先算溶质物质的量，再看容量瓶规格。", "物质转化路线：酸碱盐氧化物之间抓反应条件和沉淀气体。"],
    pitfalls: ["把 22.4 L·mol⁻¹ 用到非标况或非气体。", "容量瓶不能溶解固体，必须先在烧杯中溶解冷却。", "胶体、溶液、浊液按分散质粒径区分，不按颜色区分。"]
  },
  {
    id: "ion-redox",
    icon: "⚡",
    title: "离子反应 氧化还原反应",
    desc: "离子方程式、离子共存、氧化剂还原剂和电子守恒，是选择题与大题的高频核心。",
    tags: ["离子方程式", "共存", "电子守恒"],
    formulas: ["化合价升高：失电子，被氧化，作还原剂", "化合价降低：得电子，被还原，作氧化剂", "氧化还原配平：得失电子总数相等"],
    equations: ["H++OH-=H2O", "Ba2++SO4^2-=BaSO4↓", "2Fe2++Cl2=2Fe3++2Cl-", "MnO4-+5Fe2++8H+=Mn2++5Fe3++4H2O"],
    experience: ["离子方程式先拆强酸、强碱、可溶盐，弱电解质、沉淀、气体、氧化物不拆。", "共存题看颜色、酸碱环境、氧化还原、沉淀气体弱电解质。", "氧化还原大题优先用电子守恒，少陷入复杂过程。"],
    mnemonic: ["升失氧还，降得还氧。", "离子共存四把刀：沉淀、气体、弱电解质、氧还反应。"],
    types: ["离子方程式判断：查拆写、配平、电荷守恒、是否符合事实。", "离子共存：把隐含条件如无色、酸性、碱性、滴入试剂翻译出来。", "氧化还原计算：设电子转移数，建立守恒关系。"],
    pitfalls: ["弱酸弱碱不能拆，如 CH3COOH、NH3·H2O。", "忽略无色条件：Cu2+、Fe3+、MnO4- 等有颜色。", "只配元素不配电荷，导致离子方程式失真。"]
  },
  {
    id: "metals",
    icon: "🔩",
    title: "金属及其化合物",
    desc: "钠、镁、铝、铁、铜及其重要化合物，重点在性质差异、转化链和实验现象。",
    tags: ["Na", "Al", "Fe"],
    formulas: ["Al、Al2O3、Al(OH)3 均具两性", "Fe2+ 易被氧化为 Fe3+", "金属活动性越强，越易失电子"],
    equations: ["2Na+2H2O=2NaOH+H2↑", "2Al+2NaOH+2H2O=2NaAlO2+3H2↑", "Fe+2Fe3+=3Fe2+", "Fe3++3SCN-=Fe(SCN)3"],
    experience: ["金属题抓价态变化和沉淀颜色。", "铝三角 Al3+、Al(OH)3、AlO2- 是推断题常客。", "铁盐检验常用 KSCN，亚铁离子检验要防空气氧化。"],
    mnemonic: ["铝遇强酸强碱都放氢，铁二浅绿铁三黄。", "钠浮熔游响红，现象顺序要记清。"],
    types: ["金属转化推断：从颜色、气体、沉淀、两性突破。", "混合金属计算：用氢气量或质量差建立方程。", "离子检验实验：选择特征试剂并排除干扰。"],
    pitfalls: ["Al(OH)3 能溶于强碱，Mg(OH)2 不能。", "Fe 与 Cl2 反应生成 FeCl3，与盐酸生成 FeCl2。", "钠不能从盐溶液中置换金属，先与水反应。"]
  },
  {
    id: "nonmetals",
    icon: "🌫️",
    title: "非金属及其化合物",
    desc: "氯、硫、氮、硅及其化合物，考查气体制备、环境化学、氧化还原和工业流程。",
    tags: ["Cl", "S", "N", "Si"],
    formulas: ["Cl2、SO2、NO2 常体现氧化还原性质", "SiO2 是酸性氧化物，但不溶于水", "HNO3 具有强氧化性"],
    equations: ["Cl2+H2O=HCl+HClO", "SO2+Cl2+2H2O=H2SO4+2HCl", "3NO2+H2O=2HNO3+NO", "SiO2+2NaOH=Na2SiO3+H2O"],
    experience: ["非金属题多从气体颜色、刺激性气味、漂白性切入。", "氯水成分复杂，既有 Cl2 又有 HClO、H+、Cl-。", "氮氧化物与水、氧气关系是工业制硝酸的核心。"],
    mnemonic: ["氯水漂白靠 HClO，SO2 漂白可逆要记牢。", "二氧化硅不亲水，能吃强碱和氢氟酸。"],
    types: ["气体制备与净化：发生、除杂、干燥、收集、尾气处理。", "元素化合物推断：以颜色和特征反应定位物质。", "工业流程：看原料利用、循环物质、环保处理。"],
    pitfalls: ["SO2 漂白是化合漂白，氯水漂白是氧化漂白。", "NO 遇空气变 NO2，收集方法要注意。", "SiO2 不与水反应生成 H2SiO3。"]
  },
  {
    id: "periodic",
    icon: "🧬",
    title: "原子结构 元素周期律",
    desc: "核外电子排布、周期表位置、半径、电负性、金属性和非金属性递变规律。",
    tags: ["周期表", "电子排布", "递变规律"],
    formulas: ["原子序数=核电荷数=质子数=核外电子数", "同周期从左到右原子半径减小", "同主族从上到下原子半径增大"],
    equations: ["2Na+Cl2=2NaCl", "2K+2H2O=2KOH+H2↑", "Cl2+2Br-=2Cl-+Br2"],
    experience: ["周期律题先定位元素，再比较性质。", "半径比较先看电子层数，再看核电荷数。", "最高价氧化物水化物酸碱性可判断金属性与非金属性。"],
    mnemonic: ["层多半径大，同层核多半径小。", "左金右非，上非下金。"],
    types: ["元素推断：根据原子序数、族序数、化合价和短周期信息定位。", "性质比较：半径、电负性、金属性、酸碱性按规律排序。", "陌生元素迁移：用同族相似性预测反应。"],
    pitfalls: ["离子半径不能简单套原子半径规律，等电子体看核电荷数。", "主族最高正价一般等于族序数，但 O、F 特殊。", "非金属性强不等于含氧酸酸性一定强，必须比较最高价含氧酸。"]
  },
  {
    id: "bond-crystal",
    icon: "💎",
    title: "化学键 分子和晶体的结构与性质",
    desc: "离子键、共价键、分子间作用力、杂化、晶体类型与性质判断。",
    tags: ["化学键", "晶体", "结构性质"],
    formulas: ["离子晶体：高熔点，熔融或水溶液导电", "分子晶体：熔沸点通常较低", "共价晶体：硬度大、熔点高"],
    equations: ["NaCl=Na++Cl-（熔融或溶液中）", "HCl+NH3=NH4Cl", "CO2+2NaOH=Na2CO3+H2O"],
    experience: ["结构决定性质，先判断粒子与作用力。", "氢键会显著提高熔沸点和溶解性。", "晶体熔沸点比较要在同类型内使用相对分子质量等因素。"],
    mnemonic: ["离子靠静电，分子靠作用力，原子晶体共价连到底。", "有 H 连 FON，氢键常出现。"],
    types: ["化学键判断：看元素种类、电负性差和粒子构成。", "晶体类型判断：由熔点、导电性、硬度、溶解性反推。", "分子结构题：用价层电子对互斥判断空间构型。"],
    pitfalls: ["含金属元素不一定是离子化合物，AlCl3 等有共价性。", "石墨能导电但属于混合型晶体特征，不能简单归类。", "氢键不是化学键，属于分子间作用力。"]
  },
  {
    id: "thermo",
    icon: "🔥",
    title: "化学反应的热效应",
    desc: "焓变、热化学方程式、盖斯定律、燃烧热和中和热。",
    tags: ["焓变", "盖斯定律", "燃烧热"],
    formulas: ["ΔH=生成物总能量-反应物总能量", "放热反应 ΔH<0，吸热反应 ΔH>0", "盖斯定律：总反应焓变等于分步焓变之和"],
    equations: ["H+(aq)+OH-(aq)=H2O(l) ΔH=-57.3 kJ·mol⁻¹", "C(s)+O2(g)=CO2(g) ΔH<0", "CH4(g)+2O2(g)=CO2(g)+2H2O(l)"],
    experience: ["热化学方程式要带状态，系数变化焓变同步倍增。", "盖斯定律可对方程式倒转、倍乘、相加。", "燃烧热要求 1 mol 可燃物完全燃烧并生成稳定氧化物。"],
    mnemonic: ["系数翻倍热翻倍，方程倒写符号反。", "放热负，吸热正。"],
    types: ["热化学方程式判断：看状态、系数、ΔH 正负和单位。", "盖斯定律计算：目标反应由已知反应线性组合得到。", "能量图分析：反应热看始末，活化能看峰差。"],
    pitfalls: ["生成 H2O(l) 与 H2O(g) 的焓变不同。", "中和热不是任意酸碱反应的热效应，弱电解质电离会吸热。", "反应快慢与 ΔH 大小没有必然关系。"]
  },
  {
    id: "electrochem",
    icon: "🔋",
    title: "化学反应与电能",
    desc: "原电池、电解池、金属腐蚀与防护、电极反应式书写。",
    tags: ["原电池", "电解池", "腐蚀"],
    formulas: ["原电池：负极失电子，正极得电子", "电解池：阳极失电子，阴极得电子", "电子守恒：转移电子数=电极反应电子数"],
    equations: ["Zn-2e-=Zn2+", "Cu2++2e-=Cu", "2Cl--2e-=Cl2↑", "2H2O+2e-=H2↑+2OH-"],
    experience: ["先判断装置是自发发电还是外接电源电解。", "电极反应式必须兼顾介质酸碱性。", "电镀时镀件作阴极，镀层金属作阳极。"],
    mnemonic: ["原负氧，电阳氧；阴阳都看得失电子。", "镀件阴极要记牢，想镀谁就让谁得电子。"],
    types: ["原电池判断：找自发氧化还原反应和电子流向。", "电解产物判断：阳极材料、离子放电顺序、溶液环境。", "腐蚀防护：牺牲阳极、外加电流、覆盖保护层。"],
    pitfalls: ["原电池的负极不一定是标负号的电源负极概念。", "惰性阳极与活性阳极产物不同。", "电子不在溶液中移动，溶液中靠离子迁移导电。"]
  },
  {
    id: "rate-equilibrium",
    icon: "⏱️",
    title: "化学反应速率与化学平衡",
    desc: "速率影响因素、平衡移动、K 值、转化率和图像分析。",
    tags: ["速率", "平衡", "勒夏特列"],
    formulas: ["v=Δc/Δt", "K=生成物浓度幂之积/反应物浓度幂之积", "Q 与 K 比较判断反应方向"],
    equations: ["N2+3H2 ⇌ 2NH3", "2SO2+O2 ⇌ 2SO3", "2NO2 ⇌ N2O4"],
    experience: ["速率看单位时间变化量，平衡看正逆速率相等。", "温度改变 K，一般浓度和压强不改变 K。", "图像题先看起点、拐点、平台和变化趋势。"],
    mnemonic: ["增浓增压升温催化，多数速率都变快；平衡移动看减弱改变。", "K 只随温度变。"],
    types: ["平衡移动判断：按勒夏特列原理逐项分析。", "K 与转化率计算：列三段式，代入平衡浓度。", "速率图像：根据斜率、平台和突变判断条件改变。"],
    pitfalls: ["催化剂能改变速率，不能改变平衡转化率和 K。", "恒容与恒压条件下充入惰性气体效果不同。", "固体和纯液体不写入 K 表达式。"]
  },
  {
    id: "aqueous",
    icon: "💧",
    title: "水溶液中的离子反应与平衡",
    desc: "弱电解质电离、pH、盐类水解、沉淀溶解平衡与滴定。",
    tags: ["弱电解质", "pH", "沉淀溶解"],
    formulas: ["pH=-lg c(H+)", "Kw=c(H+)·c(OH-)=1.0×10⁻¹⁴（25℃）", "Ksp=离子浓度幂之积"],
    equations: ["CH3COOH ⇌ CH3COO-+H+", "NH4++H2O ⇌ NH3·H2O+H+", "AgCl(s) ⇌ Ag++Cl-"],
    experience: ["溶液平衡题先判断主反应：电离、水解、中和还是沉淀。", "比较离子浓度要抓电荷守恒、物料守恒、质子守恒。", "滴定题注意指示剂、终点、锥形瓶是否润洗。"],
    mnemonic: ["越弱越水解，谁强显谁性。", "酸看 H，碱看 OH，盐看强弱配对。"],
    types: ["pH 计算：强酸强碱直接算，弱电解质看平衡。", "离子浓度排序：三守恒加主次关系。", "沉淀转化：比较 Ksp，难溶向更难溶转化。"],
    pitfalls: ["pH=7 不一定总是中性，温度会影响 Kw。", "稀释弱酸时电离程度增大，但 H+ 浓度通常减小。", "沉淀完全不是离子浓度为 0。"]
  },
  {
    id: "organic-basic",
    icon: "🧱",
    title: "有机物的结构 烃和烃的衍生物",
    desc: "同分异构、官能团性质、加成取代消去氧化和有机推断。",
    tags: ["官能团", "同分异构", "有机推断"],
    formulas: ["烷烃通式 CnH2n+2", "烯烃通式 CnH2n", "苯同系物通式 CnH2n-6"],
    equations: ["CH2=CH2+Br2→CH2BrCH2Br", "CH3CH2OH+O2→CH3COOH+H2O", "CH3COOH+C2H5OH ⇌ CH3COOC2H5+H2O"],
    experience: ["有机题先圈官能团，再判断反应类型。", "同分异构先碳链后位置再官能团。", "推断题用分子式、不饱和度、特征反应一步步缩小范围。"],
    mnemonic: ["双键加成，醇能氧化，羧酸酯化，卤代能水解。", "先链后位再类别，同分异构不乱飞。"],
    types: ["官能团性质：根据试剂和现象判断结构。", "合成路线：逆推目标官能团，选择加成、取代、氧化、还原。", "同分异构书写：按规则分类计数。"],
    pitfalls: ["苯的溴代需要 FeBr3，不能和烯烃加成混淆。", "醇消去要看邻碳是否有氢。", "酯化反应酸脱羟基、醇脱氢。"]
  },
  {
    id: "bio-synthesis",
    icon: "🧫",
    title: "生命活动的物质基础 有机合成",
    desc: "糖类、油脂、蛋白质、高分子材料和有机合成路线设计。",
    tags: ["糖类", "蛋白质", "高分子"],
    formulas: ["葡萄糖：C6H12O6", "氨基酸含 -NH2 和 -COOH", "加聚反应保留主链，缩聚反应常脱小分子"],
    equations: ["葡萄糖+2Cu(OH)2→Cu2O↓+其他产物", "氨基酸+氨基酸→二肽+H2O", "nCH2=CH2→[-CH2-CH2-]n"],
    experience: ["生命物质题抓水解产物和特征检验。", "高分子题先判断单体和聚合方式。", "合成路线要保证碳骨架和官能团变化都合理。"],
    mnemonic: ["糖能水解看几糖，蛋白质水解到氨基酸。", "双键加聚，双官能团缩聚。"],
    types: ["营养物质判断：糖类、油脂、蛋白质性质和检验。", "高分子单体推断：从重复单元断键回推。", "有机合成设计：用官能团转化串联路线。"],
    pitfalls: ["油脂不是高分子化合物。", "淀粉遇碘变蓝，葡萄糖能发生银镜反应。", "蛋白质盐析可逆，变性通常不可逆。"]
  },
  {
    id: "experiment-basic",
    icon: "🔬",
    title: "化学实验基本方法",
    desc: "仪器使用、物质分离提纯、气体制备、定量实验和安全规范。",
    tags: ["实验仪器", "分离提纯", "安全"],
    formulas: ["过滤：固液分离", "蒸馏：沸点差较大的液体分离", "萃取分液：溶解度差和互不相溶"],
    equations: ["CaCO3+2HCl=CaCl2+CO2↑+H2O", "2KClO3=2KCl+3O2↑", "NH4Cl+NaOH=NH3↑+NaCl+H2O"],
    experience: ["实验题按目的、原理、装置、操作、现象、结论回答。", "气体制备必须考虑除杂、干燥、收集和尾气处理。", "定量实验重视误差方向分析。"],
    mnemonic: ["一查装置二查气密，三装药品四收集。", "上口倒、下口放，分液操作别慌张。"],
    types: ["装置连接：发生装置到净化干燥收集尾气。", "分离提纯：按溶解性、沸点、密度、反应性选择方法。", "误差分析：看被测量偏大还是偏小。"],
    pitfalls: ["容量瓶、滴定管、移液管使用前要按要求润洗或不润洗。", "加热液体试管口不能对人。", "洗涤沉淀要少量多次，检验洗涤是否完全。"]
  },
  {
    id: "experiment-design",
    icon: "🧭",
    title: "实验方案的设计与评价",
    desc: "实验目的拆解、变量控制、证据链、方案评价和创新探究题。",
    tags: ["方案设计", "变量控制", "评价"],
    formulas: ["控制变量：只改变自变量，保持无关变量一致", "评价方案：科学性、可行性、安全性、环保性", "证据链：现象必须能唯一支持结论"],
    equations: ["CO2+Ca(OH)2=CaCO3↓+H2O", "SO2+2H2S=3S↓+2H2O", "2I-+H2O2+2H+=I2+2H2O"],
    experience: ["先写实验目的，再倒推需要证明什么。", "评价题要指出问题并给出改进方案。", "探究题证据要排除干扰，不能只靠单一现象。"],
    mnemonic: ["目的定原理，原理定装置，现象定结论。", "评价四问：准不准、行不行、安不安、绿不绿。"],
    types: ["物质检验方案：选择特征反应并设置对照。", "性质探究：控制变量，记录现象，推导结论。", "工业流程评价：原料利用率、能耗、循环和污染处理。"],
    pitfalls: ["没有空白对照或对比实验，结论说服力不足。", "试剂过量可能引入新干扰。", "只描述现象不解释原因，实验题容易失分。"]
  }
];

const homeView = document.querySelector("#home-view");
const detailView = document.querySelector("#detail-view");
const topicGrid = document.querySelector("#topicGrid");
const topicDetail = document.querySelector("#topicDetail");
const searchInput = document.querySelector("#searchInput");

function listItems(items) {
  return `<ul class="list">${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
}

function makeBasicPaper(topic) {
  return [
    {
      q: `【基础 1】写出或解释本专题“${topic.title}”中最常考的 2 个核心关系。`,
      a: `可答：${topic.formulas.slice(0, 2).join("；")}。解题时先判断适用条件，再代入数据或用于性质比较。`
    },
    {
      q: `【基础 2】选择一个代表方程式，说明它体现了什么知识点。`,
      a: `例如：${topic.equations[0]}。它体现本专题的典型反应事实，答题时要注意配平、状态或反应条件。`
    },
    {
      q: `【基础 3】遇到本专题选择题，第一步应该检查什么？`,
      a: `先检查题干限制条件，再用“${topic.experience[0]}”的思路处理。选择题不要急着算，先排除明显违背事实或条件的选项。`
    }
  ];
}

function makeAdvancedPaper(topic) {
  return [
    `【加强 1】以“${topic.title}”为核心，设计一道含图像、实验现象或流程信息的综合题，并写出关键推理链。`,
    `【加强 2】把 ${topic.tags.join("、")} 与离子反应、氧化还原或实验评价结合，完成一道跨模块大题。`,
    `【加强 3】整理本专题 5 个错题，标注错因属于“概念、条件、计算、表达、审题”中的哪一类。`
  ];
}

function renderCards(items = topics) {
  topicGrid.innerHTML = items.map((topic, index) => `
    <button class="topic-card" type="button" data-id="${topic.id}">
      <span class="icon">${topic.icon}</span>
      <h3>${index + 1}. ${topic.title}</h3>
      <p>${topic.desc}</p>
      <div class="tag-row">${topic.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
    </button>
  `).join("");
}

function renderDetail(topic) {
  const basicPaper = makeBasicPaper(topic);
  const advancedPaper = makeAdvancedPaper(topic);
  topicDetail.innerHTML = `
    <section class="detail-hero">
      <p class="eyebrow">${topic.icon} 专题冲刺</p>
      <h2>${topic.title}</h2>
      <p>${topic.desc} 今天把这一章打穿一点点，考场上就少慌一点点。你已经在路上了，继续稳住！💪</p>
      <div class="tag-row">${topic.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
    </section>

    <section class="content-block">
      <h3>1. 知识点解读 🧠</h3>
      <div class="content-grid">
        <div class="mini-panel"><strong>公式/规律</strong>${listItems(topic.formulas)}</div>
        <div class="mini-panel"><strong>重要方程式</strong>${listItems(topic.equations)}</div>
        <div class="mini-panel"><strong>知识点经验</strong>${listItems(topic.experience)}</div>
        <div class="mini-panel"><strong>背诵口诀</strong>${listItems(topic.mnemonic)}</div>
      </div>
    </section>

    <section class="content-block">
      <h3>2. 题型与解题思路 📝</h3>
      ${listItems(topic.types)}
    </section>

    <section class="content-block danger">
      <h3>3. 易错点提醒 🚧</h3>
      ${listItems(topic.pitfalls)}
    </section>

    <section class="content-block">
      <h3>4. 试卷测试 📄</h3>
      <div class="paper">
        <h3>基础版试卷（含详细解答）</h3>
        ${basicPaper.map(item => `
          <div class="question">
            <strong>${item.q}</strong>
            <div class="answer">详细解答：${item.a}</div>
          </div>
        `).join("")}
        <h3>加强版试卷</h3>
        ${advancedPaper.map(item => `<div class="question"><strong>${item}</strong><p>挑战提示：先列知识点，再写依据，最后规范表达。会做不丢分，才是真冲刺。</p></div>`).join("")}
      </div>
    </section>
  `;
}

function showHome() {
  homeView.classList.add("active");
  detailView.classList.remove("active");
  location.hash = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showTopic(id) {
  const topic = topics.find(item => item.id === id) || topics[0];
  renderDetail(topic);
  homeView.classList.remove("active");
  detailView.classList.add("active");
  location.hash = topic.id;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

topicGrid.addEventListener("click", event => {
  const card = event.target.closest("[data-id]");
  if (card) showTopic(card.dataset.id);
});

document.querySelectorAll("[data-home]").forEach(button => {
  button.addEventListener("click", showHome);
});

searchInput.addEventListener("input", event => {
  const keyword = event.target.value.trim().toLowerCase();
  const result = topics.filter(topic => {
    const text = `${topic.title} ${topic.desc} ${topic.tags.join(" ")} ${topic.formulas.join(" ")}`.toLowerCase();
    return text.includes(keyword);
  });
  renderCards(result);
});

renderCards();

if (location.hash) {
  showTopic(location.hash.replace("#", ""));
}
