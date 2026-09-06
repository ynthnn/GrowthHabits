/**
 * GROWTH HABITS - DATA MODULE
 * ==============================
 * This file contains all the static data for the application, including:
 * - Portfolio performance data
 * - Benchmark data
 * - Social Trade education content
 * - Research and Education resources
 */

export const siteData = {
  // 1. ABOUT SECTION
  about: {
    heroText: "Building the",
    heroHighlight: "Sustainable Investing Habits",
    thesis: "Our thesis focuses on achieving long-term, sustainable capital appreciation through diversified investments across Forex and commodity trading, cryptocurrencies, and Indonesian equities, supported by disciplined risk management and data-driven decision-making.",
    focus: {
      title: "Our Focus",
      items: ["FX", "EQ", "CRYPTO"]
    },
    pillarsTitle: "Three pillars of capital deployment.",
    pillars: [
      {
        title: "Algo Trading",
        description: "We trade using algorithms and data driven based on backtesting"
      },
      {
        title: "Liquid Assets",
        description: "Active management of liquid digital assets with a long-term horizon. We navigate volatility with high-conviction positions."
      },
      {
        title: "Strategic Incubation",
        description: "We don't just invest; we build. Leveraging our network to accelerate growth, adoption, and strategic partnerships."
      }
    ]
  },

  // 2. PORTFOLIO DATA
  portfolio: {
    evergreen: {
      metrics: {
        drawdown: "8.5%",
        totalTrades: 124,
        winRate: "68%"
      },
      monthlyReturns: [
        { month: 'Jan', year: 2024, return: 2.1 },
        { month: 'Feb', year: 2024, return: 1.8 },
        { month: 'Mar', year: 2024, return: -0.5 },
        { month: 'Apr', year: 2024, return: 3.2 },
        { month: 'May', year: 2024, return: 2.4 },
        { month: 'Jun', year: 2024, return: 1.5 },
        { month: 'Jul', year: 2024, return: 2.9 },
        { month: 'Aug', year: 2024, return: -1.2 },
        { month: 'Sep', year: 2024, return: 3.5 }
      ],
      equityCurve: [100, 102.1, 103.94, 103.42, 106.73, 109.29, 110.93, 114.15, 112.78, 116.73]
    },
    compoundX: {
      metrics: {
        drawdown: "15.2%",
        totalTrades: 215,
        winRate: "55%"
      },
      monthlyReturns: [
        { month: 'Jan', year: 2024, return: 4.5 },
        { month: 'Feb', year: 2024, return: -2.1 },
        { month: 'Mar', year: 2024, return: 5.8 },
        { month: 'Apr', year: 2024, return: 6.2 },
        { month: 'May', year: 2024, return: -3.4 },
        { month: 'Jun', year: 2024, return: 7.1 },
        { month: 'Jul', year: 2024, return: 4.2 },
        { month: 'Aug', year: 2024, return: 8.5 },
        { month: 'Sep', year: 2024, return: -1.5 }
      ],
      equityCurve: [100, 104.5, 102.3, 108.23, 114.94, 111.03, 118.91, 123.9, 134.43, 132.41]
    },
    benchmarks: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      btc: [100, 105, 112, 108, 115, 120, 118, 125, 122],
      xau: [100, 101, 102, 103, 102.5, 104, 105, 106, 107],
      snp: [100, 102, 104, 103, 105, 106, 108, 107, 109]
    }
  },

  // 3. SOCIAL TRADE SECTION
  socialTrade: {
    education: {
      title: "What is Copy Trading?",
      content: "Copy trading is an innovation where investors can automatically copy the trading positions opened and managed by expert traders or algorithmic systems. This allows both novice and experienced investors to participate in the financial markets without having to actively analyze the market."
    },
    broker: {
      name: "Vantage",
      description: "We partner with Vantage, a regulated global broker with lightning-fast execution and institutional spreads. Fund security and transparency are top priorities.",
      link: "https://www.vantagemarkets.com/"
    },
    comparison: [
      {
        type: "Self Trading",
        pros: ["Full control over every position", "100% flexibility"],
        cons: ["Time-consuming", "High emotional stress", "Requires deep analytical skills"]
      },
      {
        type: "Signal Following",
        pros: ["Saves analysis time", "Learn from others' positions"],
        cons: ["Execution is often delayed (slippage)", "Dependent on notifications", "Emotions still involved when clicking the button"]
      },
      {
        type: "Copy Trading",
        pros: ["100% automated, precision execution", "Emotion-free", "Passive diversification"],
        cons: ["Partial control handed over to the system", "Requires profit sharing / fee"]
      }
    ],
    risks: [
      "Market Risk: Instrument prices fluctuate.",
      "Drawdown Risk: Capital can temporarily decrease.",
      "Past performance does not guarantee future performance."
    ]
  },

  // 4. EDUCATION & RESEARCH SECTION
  education: {
    marketOutlook: [
      {
        id: 1,
        title: "Q3 2024 Macro Overview",
        summary: "Analysis of the impact of the Fed's interest rate policy on major currencies and gold.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000",
        date: "Sept 1, 2024"
      },
      {
        id: 2,
        title: "XAU/USD Trend Reversal",
        summary: "Gold outlook amid Middle East geopolitical tensions.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000",
        date: "Aug 15, 2024"
      }
    ],
    deepResearch: [
      {
        title: "Algorithmic Edge in Forex Markets (PDF)",
        link: "#",
        size: "2.4 MB"
      },
      {
        title: "Managing Drawdowns During High Volatility (PDF)",
        link: "#",
        size: "1.8 MB"
      }
    ],
    videos: [
      {
        title: "How the Evergreen Algorithm Works",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        title: "CompoundX Risk Management",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ]
  }
};
