import React from 'react';
import './board.css';

export default function Board({ onNavigate }) {
    return (
        <div className="bg-board-background-light dark:bg-board-background-dark font-sans text-board-text-main dark:text-slate-100 antialiased overflow-x-hidden h-screen overflow-y-auto flex flex-col">
            <header className="sticky top-0 z-50 w-full border-b border-[#e6e2de] dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 md:px-10 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="size-9 text-board-primary">
                            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <h2 className="text-2xl font-serif font-bold tracking-tight text-[#4a4036] dark:text-white">LibConnect</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-10">
                        <a className="text-sm font-medium text-board-text-muted hover:text-board-primary transition-colors cursor-pointer" onClick={() => onNavigate('home')}>Home</a>
                        <a className="text-sm font-medium text-board-text-muted hover:text-board-primary transition-colors cursor-pointer">Books</a>
                        <a className="text-sm font-medium text-board-primary font-bold border-b-2 border-board-primary pb-0.5 cursor-pointer">Community</a>
                        <a className="text-sm font-medium text-board-text-muted hover:text-board-primary transition-colors cursor-pointer">My Page</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="flex size-10 items-center justify-center rounded-full hover:bg-board-secondary dark:hover:bg-slate-800 transition-colors">
                            <span className="material-symbols-outlined text-board-text-muted dark:text-slate-300">notifications</span>
                        </button>
                        <div className="size-9 rounded-full bg-cover bg-center border border-board-border-color dark:border-slate-700 cursor-pointer shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA8kzv4YqcVg6lJLyMOC33ded1BGbzcnbrIDAhjTe0pfTH15zOUslb0oCENfavKNqrDJ5XU5gAMPbzGVzTZB4cVHyq_fbqDZ9BmW2Od1II2Mf_c1LwX99XNRe3ztnFaAFjDGWdX4kkV2-C70WuCCigmRHB2QD_adEwdgq2KMsswb2_nhzk_pA7xFuJ5vkmGg2XCSOFWS3SenExzGvwuJoQnf0HvZkEU06jQqsNj_e0a-JMLnKSlnFnMK0XlbW3NP46XTiBY_T67_BS_")' }}></div>
                    </div>
                </div>
            </header>
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-10 py-10">
                <div className="flex flex-wrap items-center gap-2 mb-8 text-sm">
                    <a className="text-board-text-muted hover:text-board-primary transition-colors cursor-pointer" onClick={() => onNavigate('home')}>Home</a>
                    <span className="material-symbols-outlined text-[14px] text-board-text-muted">chevron_right</span>
                    <a className="text-board-text-muted hover:text-board-primary transition-colors cursor-pointer">Community</a>
                    <span className="material-symbols-outlined text-[14px] text-board-text-muted">chevron_right</span>
                    <span className="text-board-text-main font-semibold">Free Board</span>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="flex-1 flex flex-col gap-8">
                        <div className="flex flex-col md:flex-row justify-between items-end border-b border-board-border-color pb-6 gap-4">
                            <div>
                                <h1 className="text-3xl font-serif font-bold text-[#4a4036] dark:text-white mb-2">Community Board</h1>
                                <p className="text-board-text-muted text-sm md:text-base">Share your thoughts, reviews, and questions with our reading community.</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-board-border-color dark:border-slate-700 shadow-soft flex flex-col xl:flex-row gap-4 justify-between items-center">
                            <div className="flex items-center gap-1 w-full xl:w-auto overflow-x-auto no-scrollbar border-b xl:border-b-0 border-board-border-color pb-2 xl:pb-0">
                                <button className="whitespace-nowrap px-4 py-2 rounded-md bg-board-primary text-white text-sm font-medium transition-colors shadow-sm">
                                    All Posts
                                </button>
                                <button className="whitespace-nowrap px-4 py-2 rounded-md text-board-text-muted hover:bg-board-secondary dark:text-slate-300 dark:hover:bg-slate-700 text-sm font-medium transition-colors">
                                    Notices
                                </button>
                                <button className="whitespace-nowrap px-4 py-2 rounded-md text-board-text-muted hover:bg-board-secondary dark:text-slate-300 dark:hover:bg-slate-700 text-sm font-medium transition-colors" onClick={() => onNavigate('reviews')}>
                                    Book Reviews
                                </button>
                                <button className="whitespace-nowrap px-4 py-2 rounded-md text-board-text-muted hover:bg-board-secondary dark:text-slate-300 dark:hover:bg-slate-700 text-sm font-medium transition-colors">
                                    Questions
                                </button>
                                <button className="whitespace-nowrap px-4 py-2 rounded-md text-board-text-muted hover:bg-board-secondary dark:text-slate-300 dark:hover:bg-slate-700 text-sm font-medium transition-colors">
                                    Free Talk
                                </button>
                            </div>
                            <div className="flex items-center gap-3 w-full xl:w-auto">
                                <div className="relative flex-1 xl:w-80">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-gray-400 text-[20px]">search</span>
                                    </div>
                                    <input className="block w-full pl-10 pr-3 py-2 border border-board-border-color rounded-md bg-[#f9f9f9] dark:bg-slate-900 text-sm focus:ring-1 focus:ring-board-primary focus:border-board-primary placeholder-gray-400 transition-shadow" placeholder="Search by title, author, or keyword..." type="text" />
                                </div>
                                <button className="flex items-center gap-2 bg-[#4a4036] hover:bg-[#362e26] text-white px-5 py-2 rounded-md text-sm font-semibold shadow-md transition-all whitespace-nowrap">
                                    <span className="material-symbols-outlined text-[18px]">edit</span>
                                    Write
                                </button>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg border border-board-border-color dark:border-slate-700 overflow-hidden shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs text-[#5c554e] uppercase bg-[#f4f1ea] dark:bg-slate-700 dark:text-slate-300 border-b border-board-border-color dark:border-slate-600">
                                        <tr>
                                            <th className="px-6 py-4 font-bold w-24 text-center" scope="col">Category</th>
                                            <th className="px-6 py-4 font-bold" scope="col">Title</th>
                                            <th className="px-6 py-4 font-bold w-32 md:w-40" scope="col">Author</th>
                                            <th className="px-6 py-4 font-bold w-28 text-center hidden md:table-cell" scope="col">Date</th>
                                            <th className="px-6 py-4 font-bold w-20 text-center hidden sm:table-cell" scope="col">Views</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-board-border-color dark:divide-slate-700">
                                        <tr className="bg-[#fefbf6] dark:bg-slate-800/50 hover:bg-[#fcf8f2] transition-colors">
                                            <td className="px-6 py-4 text-center">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#8d7b68] text-white">
                                                    NOTICE
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <a className="font-bold text-[#4a4036] dark:text-white hover:underline flex items-center gap-2" href="#">
                                                    <span className="material-symbols-outlined text-red-500 text-[18px]">campaign</span>
                                                    Library opening hours update for the holiday season
                                                </a>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="size-6 rounded-full overflow-hidden flex-shrink-0">
                                                        <img alt="Admin" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa4mC_fgwVgEvGNOvff6to1CAS5rFY243yTCp6q4lbHeKiGbUvyCiEV6q1inedFnRRp5Pr2BSdny6NaRwn056G5KaTKSbnp83ev5KvsjnLAh48vPnOR_cGuJeYC52QrJYwZaiS7M3u2l-L4LS9409zaWYGnWEHOcYfcx_2m2QSjS7Fwah61Y9E6wV_Pn1SWF_Xh4GP-gKOjFpiZ5K6k3HSfiuPRsI7qxJV2Uso3U5VcSEaIfS1YJmQFpWtWuqkNEaKzAR6TBUSP-VI" />
                                                    </div>
                                                    <span className="font-semibold text-board-primary">Admin Team</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-center text-board-text-muted hidden md:table-cell">Dec 22</td>
                                            <td className="px-6 py-4 text-center text-board-text-muted hidden sm:table-cell">1.2k</td>
                                        </tr>
                                        <tr className="bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                                            <td className="px-6 py-4 text-center">
                                                <span className="text-xs font-medium text-board-primary">Review</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <a className="font-medium text-board-text-main dark:text-slate-200 hover:text-board-primary transition-colors block" href="#">
                                                    Thoughts on "The Midnight Library" - deeply moving!
                                                </a>
                                                <div className="md:hidden mt-1 flex items-center gap-2 text-xs text-board-text-muted">
                                                    <span>Sarah J.</span>
                                                    <span>•</span>
                                                    <span>2 hours ago</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="size-6 rounded-full overflow-hidden flex-shrink-0">
                                                        <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH6feYwaOM6RUx7T-rS_cz-Igm5cE2QtV1rQSMAjyP05412eXO8gpeT9xEVcrbafsExfT3iOlDtMB7ptgY030qLCI5CGTjN2OtaOYB-uBEv8wWUolJXJ45RSOXiUOOzNpNGnLIYREE5ULWDDKekN4pBAIfRNz-SyggLUGd-qogY1zY6bcsemshZrHa1jk0ckj1zi-kdP3o632CRs_ZKU5lkYbUwNxk_cRHYhuMZ8Ak9Bvzs4NtQWzpDmuceWtW8PM5xmHUcC41R1hg" />
                                                    </div>
                                                    <span className="text-board-text-main dark:text-slate-300">Sarah J.</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-center text-board-text-muted hidden md:table-cell">2 hours ago</td>
                                            <td className="px-6 py-4 text-center text-board-text-muted hidden sm:table-cell">86</td>
                                        </tr>
                                        {/* Additional rows would go here, mapped similarly */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="flex justify-center mt-4">
                            <nav aria-label="Pagination" className="flex items-center gap-2">
                                <button className="size-8 flex items-center justify-center rounded-md border border-board-border-color bg-white text-board-text-muted hover:bg-board-secondary transition-colors">
                                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                                </button>
                                <button className="size-8 flex items-center justify-center rounded-md bg-board-primary text-white text-sm font-bold shadow-sm">1</button>
                                <button className="size-8 flex items-center justify-center rounded-md border border-board-border-color bg-white text-board-text-main hover:bg-board-secondary transition-colors text-sm">2</button>
                                <button className="size-8 flex items-center justify-center rounded-md border border-board-border-color bg-white text-board-text-main hover:bg-board-secondary transition-colors text-sm">3</button>
                                <span className="px-2 text-board-text-muted">...</span>
                                <button className="size-8 flex items-center justify-center rounded-md border border-board-border-color bg-white text-board-text-main hover:bg-board-secondary transition-colors text-sm">12</button>
                                <button className="size-8 flex items-center justify-center rounded-md border border-board-border-color bg-white text-board-text-muted hover:bg-board-secondary transition-colors">
                                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                                </button>
                            </nav>
                        </div>
                    </div>
                    <aside className="w-full lg:w-80 flex flex-col gap-8">
                        <div className="relative overflow-hidden rounded-lg bg-[#4a4036] text-white p-6 shadow-soft">
                            <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLdHv7N1SJ30l6bYwYJbpHtke8yEV-MEs1yEXKBaWrxBBCOYfVRoEkPiBenxNaiv8l49l5bGFQkcWLRMajjdy_FAZkuZE9inNppnaSLpYX3_0YRRIflTahXxgpk1Pw62X6Ai3F6Ly2fFVNn4oOgZWcKGWtf2S9zxOHmVC9jQ_hzWMs9yya9tuW7KQfJgKYlT5tDsipUdOYmAj6JEnuhC4xekE40Fee2Wg2MHLx2rv4BM8cvxpMfe5IU0BUY8hAy8Sprb6NoDjFwXyw")' }}></div>
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="mb-3 p-2 bg-white/10 rounded-full backdrop-blur-sm">
                                    <span className="material-symbols-outlined text-[24px]">auto_stories</span>
                                </div>
                                <h4 className="text-xl font-serif font-bold mb-2">Reading Challenge</h4>
                                <p className="text-sm text-gray-200 mb-5 leading-relaxed">Join our monthly challenge and discover new worlds with "The Alchemist".</p>
                                <button className="w-full py-2.5 bg-white text-[#4a4036] text-sm font-bold rounded hover:bg-gray-100 transition-colors shadow-sm">
                                    Join Challenge
                                </button>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-lg border border-board-border-color dark:border-slate-700 p-6 shadow-soft">
                            <div className="flex items-center gap-2 mb-5 pb-3 border-b border-board-border-color dark:border-slate-700">
                                <span className="material-symbols-outlined text-board-primary">trending_up</span>
                                <h3 className="text-lg font-serif font-bold text-[#4a4036] dark:text-white">Trending Topics</h3>
                            </div>
                            <div className="flex flex-col gap-4">
                                <a className="group block" href="#">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl font-bold text-gray-200 group-hover:text-board-accent transition-colors">01</span>
                                        <div>
                                            <p className="text-sm font-semibold text-board-text-main dark:text-slate-200 group-hover:text-board-primary transition-colors line-clamp-2">
                                                Discussion: Should libraries replace all books with e-books?
                                            </p>
                                            <span className="text-xs text-board-text-muted mt-1 block">142 comments</span>
                                        </div>
                                    </div>
                                </a>
                                {/* More trending items... */}
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
            <footer className="mt-auto py-10 bg-white dark:bg-slate-900 border-t border-board-border-color dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="size-6 text-board-primary opacity-80">
                            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <span className="text-sm font-semibold text-board-text-main dark:text-white">LibConnect</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
