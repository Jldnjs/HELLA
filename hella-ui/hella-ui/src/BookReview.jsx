import React from 'react';
import './bookreviews.css';

export default function BookReview({ onNavigate }) {
    return (
        <div className="bg-review-background-light dark:bg-review-background-dark font-display text-stone-800 dark:text-stone-100 h-screen overflow-y-auto overflow-x-hidden">
            <div className="flex max-w-[1320px] mx-auto min-h-screen">
                <aside className="w-72 hidden md:flex flex-col p-6 sticky top-0 h-screen border-r border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/50">
                    <div className="flex flex-col gap-8 h-full">
                        <div className="px-2 pt-2">
                            <h1 className="text-review-primary-dark dark:text-review-primary text-2xl font-serif-kr font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined text-3xl">local_library</span>
                                Library Connect
                            </h1>
                        </div>
                        <nav className="flex flex-col gap-2 flex-1">
                            <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-stone-600 dark:text-stone-400 hover:bg-review-surface dark:hover:bg-stone-800 hover:text-review-primary-dark dark:hover:text-review-primary transition-all font-medium cursor-pointer" onClick={() => onNavigate('home')}>
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
                                홈 (Home)
                            </a>
                            <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-stone-600 dark:text-stone-400 hover:bg-review-surface dark:hover:bg-stone-800 hover:text-review-primary-dark dark:hover:text-review-primary transition-all font-medium cursor-pointer">
                                <span className="material-symbols-outlined">shelves</span>
                                내 서재 (My Library)
                            </a>
                            <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-review-surface dark:bg-stone-800 text-review-primary-dark dark:text-review-primary font-semibold shadow-sm cursor-pointer" onClick={() => onNavigate('reviews')}>
                                <span className="material-symbols-outlined">explore</span>
                                탐색 (Explore)
                            </a>
                            <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-stone-600 dark:text-stone-400 hover:bg-review-surface dark:hover:bg-stone-800 hover:text-review-primary-dark dark:hover:text-review-primary transition-all font-medium cursor-pointer">
                                <span className="material-symbols-outlined">notifications</span>
                                알림 (Notifications)
                            </a>
                            <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-stone-600 dark:text-stone-400 hover:bg-review-surface dark:hover:bg-stone-800 hover:text-review-primary-dark dark:hover:text-review-primary transition-all font-medium cursor-pointer">
                                <span className="material-symbols-outlined">person</span>
                                프로필 (Profile)
                            </a>
                        </nav>
                        <button className="flex w-full items-center justify-center gap-2 rounded-xl h-14 px-6 bg-review-primary text-white text-base font-bold shadow-md shadow-stone-300 dark:shadow-stone-900 hover:bg-review-primary-dark hover:-translate-y-0.5 transition-all mb-4" onClick={() => onNavigate('write-review')}>
                            <span className="material-symbols-outlined text-[22px]">edit_square</span>
                            기록 작성하기
                        </button>
                        <div className="flex items-center gap-3 px-3 py-3 mt-auto rounded-xl border border-stone-100 dark:border-stone-800 bg-review-surface/50 dark:bg-stone-800/50">
                            <div className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-white dark:border-stone-700 shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRa62TCb4mqdMOzeRKVAhhoFyPoEoz3F_es_g2QT2Dy2X2twsVeaioFrZiKC9k9HERp-A1Nf021Cm7MJ_j0-3Bmzx40GC6wpVnfqwI7UOysUUdNmkjQnqsh5qXQVf_Hdg7dzonXQ3zIGcH-kFx0Ps-LjMEmW4RH8Ds1_1kpPh__4s7x_HIcn1DB-p2j7wc5LCCDdZT37VSZ1S8nlxsyeT0Vqw6HBoU6DM7BK2ah4hZ85gCAiAzHVF5i9EDw0GH4Toe0pYaAQ8T8nBZ')" }}></div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-stone-800 dark:text-white">Alex Morgan</span>
                                <span className="text-xs text-stone-500 dark:text-stone-400">@alexreads</span>
                            </div>
                            <button className="ml-auto text-stone-400 hover:text-stone-600 dark:hover:text-stone-300">
                                <span className="material-symbols-outlined">more_horiz</span>
                            </button>
                        </div>
                    </div>
                </aside>
                <main className="flex-1 flex flex-col min-w-0 border-r border-stone-200 dark:border-stone-800 bg-white dark:bg-review-background-dark">
                    <div className="sticky top-0 z-10 bg-white/90 dark:bg-review-background-dark/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 px-6 py-4">
                        <div className="flex justify-between items-center mb-4 md:hidden">
                            <span className="material-symbols-outlined text-review-primary text-3xl">local_library</span>
                            <div className="h-9 w-9 rounded-full bg-stone-200 dark:bg-stone-700 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRa62TCb4mqdMOzeRKVAhhoFyPoEoz3F_es_g2QT2Dy2X2twsVeaioFrZiKC9k9HERp-A1Nf021Cm7MJ_j0-3Bmzx40GC6wpVnfqwI7UOysUUdNmkjQnqsh5qXQVf_Hdg7dzonXQ3zIGcH-kFx0Ps-LjMEmW4RH8Ds1_1kpPh__4s7x_HIcn1DB-p2j7wc5LCCDdZT37VSZ1S8nlxsyeT0Vqw6HBoU6DM7BK2ah4hZ85gCAiAzHVF5i9EDw0GH4Toe0pYaAQ8T8nBZ')" }}></div>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-serif-kr font-bold text-stone-800 dark:text-stone-100 hidden md:block">커뮤니티 피드</h2>
                            <div className="flex gap-2 text-stone-500">
                                <button className="p-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors" title="Filter">
                                    <span className="material-symbols-outlined">tune</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex h-12 w-full items-center justify-center rounded-xl bg-review-surface dark:bg-stone-800 p-1.5 shadow-inner">
                            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-stone-700 has-[:checked]:shadow-sm has-[:checked]:text-review-primary-dark dark:has-[:checked]:text-white text-stone-500 dark:text-stone-400 text-sm font-semibold transition-all">
                                <span className="truncate">최신 (Latest)</span>
                                <input defaultChecked className="invisible w-0" name="feed-filter" type="radio" value="Latest" />
                            </label>
                            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-stone-700 has-[:checked]:shadow-sm has-[:checked]:text-review-primary-dark dark:has-[:checked]:text-white text-stone-500 dark:text-stone-400 text-sm font-semibold transition-all">
                                <span className="truncate">팔로잉 (Following)</span>
                                <input className="invisible w-0" name="feed-filter" type="radio" value="Following" />
                            </label>
                            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-stone-700 has-[:checked]:shadow-sm has-[:checked]:text-review-primary-dark dark:has-[:checked]:text-white text-stone-500 dark:text-stone-400 text-sm font-semibold transition-all">
                                <span className="truncate">인기 (Popular)</span>
                                <input className="invisible w-0" name="feed-filter" type="radio" value="Popular" />
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <article className="p-6 border-b border-stone-200 dark:border-stone-800 hover:bg-review-surface/30 dark:hover:bg-stone-800/30 transition-colors">
                            <div className="flex gap-5">
                                <div className="shrink-0">
                                    <div className="h-14 w-14 rounded-full bg-cover bg-center ring-4 ring-review-surface dark:ring-stone-800 shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFCHChS5nmCH4Qmt-xYHsXlnzeS5IpEzeYiZiz8kcGyPFirl21pjx8CIcdpq1KBVgqKYIx-OQT8I-M_nz7S5rU1Es2hImGBkmnfnhPiDIhZ5stnTnb5cUoakUH2VKWnw-7TeFBsJa5cM5WSoyW3VFbyyf2tgSZJl7xYcvQNvZv4fQukO9a9Bn8CKMW010iRmp4w3uxJA-VKFkuUmjwU90Lyeb5_pBNXB_DugL_brZ6v4mDsTrV4XaJPJ6IM7IBY93ZyhEzOnaJTJ99')" }}></div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1.5">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="font-bold text-stone-900 dark:text-white text-base">Sarah Jenkins</span>
                                            <span className="text-stone-500 dark:text-stone-400 text-sm">@sarahj_reads</span>
                                            <span className="text-stone-400 dark:text-stone-500 text-sm">• 2h</span>
                                        </div>
                                        <button className="text-review-primary font-semibold text-sm hover:bg-review-primary/10 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[18px]">add</span> 팔로우
                                        </button>
                                    </div>
                                    <p className="text-stone-500 text-sm mb-4 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[16px]">rate_review</span>
                                        <span className="font-medium">The Midnight Library</span>에 대한 리뷰를 남겼습니다.
                                    </p>
                                    <div className="bg-review-surface/50 dark:bg-stone-800/50 rounded-2xl p-5 mb-4">
                                        <p className="text-stone-800 dark:text-stone-200 text-base leading-relaxed font-serif-kr">
                                            후회와 두 번째 기회에 관한 아름다운 이야기. 손에서 놓을 수가 없었어요! 우리가 내리는 선택들과 아주 작은 결정들이 어떻게 완전히 다른 삶으로 이어질 수 있는지 깊이 생각하게 만들었습니다. 정체되어 있다고 느끼는 분들께 강력 추천합니다.
                                        </p>
                                    </div>
                                    <div className="flex gap-5 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 p-4 mb-4 hover:border-review-primary/50 hover:shadow-md transition-all cursor-pointer group">
                                        <div className="h-32 w-20 shrink-0 rounded-lg bg-cover bg-center shadow-md group-hover:shadow-lg transition-all transform group-hover:-translate-y-1" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdp8d8u8zWAKePrKIIh-uqj1bRP97_913sD0ihzksUSIfjQaaq5AOo6856emhDTibodvqiF5zoZ_rFn_L5661XkQV4xhpnDUjhCdmncH_Rykg-Vz__55bME1f3Gl7QruxCpqvoQgfvQ7FfCfEZ8-IIR4e7SQChEh0UdfwguU37-jtOKcMLWzY96YJB_gmZMJswnofq4nB1rOSV9khMWG5RyWRAf5dZopBrOmBPEz1MyldQOanwrgcVId0AllD0XW8tyjLRCciCFV23')" }}></div>
                                        <div className="flex flex-col justify-center">
                                            <h3 className="font-bold text-stone-900 dark:text-white text-xl group-hover:text-review-primary transition-colors font-serif-kr">The Midnight Library</h3>
                                            <p className="text-stone-500 dark:text-stone-400 text-sm mt-1">Matt Haig 저</p>
                                            <div className="flex gap-1 mt-3">
                                                <span className="material-symbols-outlined text-yellow-500 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                <span className="material-symbols-outlined text-yellow-500 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                <span className="material-symbols-outlined text-yellow-500 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                <span className="material-symbols-outlined text-yellow-500 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                                <span className="material-symbols-outlined text-yellow-500 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                                            </div>
                                            <div className="flex gap-2 mt-3">
                                                <span className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-300 text-xs font-medium">Fiction</span>
                                                <span className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-300 text-xs font-medium">Fantasy</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between text-stone-500 dark:text-stone-400 max-w-md mt-2">
                                        <button className="flex items-center gap-2 hover:text-red-500 group transition-colors px-2 py-1 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20">
                                            <span className="material-symbols-outlined text-[22px] group-hover:scale-110 transition-transform">favorite</span>
                                            <span className="text-sm font-medium">248</span>
                                        </button>
                                        <button className="flex items-center gap-2 hover:text-review-primary group transition-colors px-2 py-1 rounded-lg hover:bg-review-primary/10">
                                            <span className="material-symbols-outlined text-[22px] group-hover:scale-110 transition-transform">chat_bubble</span>
                                            <span className="text-sm font-medium">42</span>
                                        </button>
                                        <button className="flex items-center gap-2 hover:text-green-600 group transition-colors px-2 py-1 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20">
                                            <span className="material-symbols-outlined text-[22px] group-hover:scale-110 transition-transform">ios_share</span>
                                            <span className="text-sm font-medium">공유</span>
                                        </button>
                                        <button className="flex items-center gap-2 hover:text-review-primary group transition-colors px-2 py-1 rounded-lg hover:bg-review-primary/10">
                                            <span className="material-symbols-outlined text-[22px] group-hover:scale-110 transition-transform">bookmark</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                        {/* More articles would go here */}
                    </div>
                </main>
                <aside className="w-80 hidden lg:flex flex-col p-6 gap-6 sticky top-0 h-screen overflow-y-auto bg-review-surface/30 dark:bg-stone-900/30 border-l border-stone-200 dark:border-stone-800">
                    <div className="relative w-full">
                        <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-stone-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-review-primary/30 border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 focus:border-review-primary h-12 pl-11 pr-4 text-sm font-medium leading-normal shadow-sm placeholder:text-stone-400 transition-all" placeholder="책, 저자, 사용자 검색..." />
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 flex items-center justify-center pointer-events-none">
                            <span className="material-symbols-outlined">search</span>
                        </div>
                    </div>
                    {/* Trending books section */}
                    <div className="rounded-2xl bg-white dark:bg-stone-800 shadow-sm border border-stone-100 dark:border-stone-700 p-5">
                        <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-5 flex items-center gap-2 font-serif-kr">
                            <span className="material-symbols-outlined text-review-primary">trending_up</span>
                            인기 도서
                        </h3>
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-3 items-center group cursor-pointer">
                                <div className="h-16 w-11 rounded bg-cover bg-center shadow-md group-hover:shadow-lg transition-all" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB19Uzm32eLvlYe-DGN4Y8nfNnXlZ_93YVFKRtOcOMkPm2zg83D5IZWZXORWiY7HPd2cHAo4u69Ck3Zd8PdVWnkgTf2s9Bb08U1VhpLzGH-wUyX_BMfbWLHykgtC_Ca8stWfCbw0npS-GlmJQcLsjoB1st6fSfoAEx0_4PkR2WwR6Nu5GDnwhMnEOzw6JizoEYtY9vYfaPOkTdwvQgf1G11yXxyduVe2LVULHs7wv75e9CjWhQsU6ZDT1NaWSWirpI5UwwXPffx9p4m')" }}></div>
                                <div className="flex-1">
                                    <p className="font-bold text-stone-800 dark:text-stone-200 text-sm group-hover:text-review-primary transition-colors line-clamp-1">아주 작은 습관의 힘 (Atomic Habits)</p>
                                    <p className="text-xs text-stone-500">James Clear</p>
                                    <div className="flex items-center gap-1 text-xs text-stone-400 mt-1">
                                        <span className="material-symbols-outlined text-[14px]">chat_bubble</span>
                                        12k discussions
                                    </div>
                                </div>
                            </div>
                            <button className="text-review-primary text-sm font-semibold hover:underline text-left mt-1 pt-2 border-t border-stone-100 dark:border-stone-700">더 보기</button>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-stone-400 px-1">
                        <a className="hover:underline hover:text-stone-500" href="#">이용약관</a>
                        <a className="hover:underline hover:text-stone-500" href="#">개인정보처리방침</a>
                        <span>© 2023 Library Connect</span>
                    </div>
                </aside>
            </div>
        </div>
    );
}
