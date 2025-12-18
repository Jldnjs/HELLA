import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './main.css'
import Board from './Board'
import BookReview from './BookReview'
import WriteReview from './WriteReview'

function Home({ onNavigate }) {
    return (
        <>
            <div className="bg-background-light dark:bg-background-dark font-sans text-text-main-light dark:text-text-main-dark h-screen flex flex-col overflow-hidden selection:bg-primary selection:text-white">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark px-6 md:px-10 py-4 sticky top-0 z-50 shadow-sm">
                    <div className="flex items-center gap-12 w-full md:w-auto">
                        <div className="flex items-center gap-3 text-primary dark:text-white">
                            <div className="size-10 flex items-center justify-center rounded-lg bg-primary text-white">
                                <span className="material-symbols-outlined text-2xl">menu_book</span>
                            </div>
                            <h2 className="text-primary dark:text-white text-2xl font-serif font-bold tracking-tight">
                                Library+
                            </h2>
                        </div>

                        <div className="hidden md:flex flex-1 max-w-lg">
                            <div className="relative w-full group">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-sub-light">
                                    <span className="material-symbols-outlined text-[20px]">search</span>
                                </div>
                                <input
                                    className="block w-full p-2.5 pl-10 text-sm text-text-main-light bg-surface-dim border border-transparent rounded-lg focus:ring-1 focus:ring-primary focus:border-primary placeholder-text-sub-light transition-all shadow-inner"
                                    placeholder="Search by title, author, or ISBN..."
                                    type="text"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                                    <button className="p-1 rounded hover:bg-black/5 text-text-sub-light transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">tune</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <nav className="hidden lg:flex items-center gap-6">
                            <a
                                className="text-text-main-light dark:text-white text-sm font-medium hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-0.5 cursor-pointer"
                                onClick={() => onNavigate('home')}
                            >
                                Home
                            </a>
                            <a
                                className="text-text-main-light dark:text-white text-sm font-medium hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-0.5 cursor-pointer"
                                href="#"
                            >
                                My Bookshelf
                            </a>
                            <a
                                className="text-text-main-light dark:text-white text-sm font-medium hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-0.5 cursor-pointer"
                                onClick={() => onNavigate('board')}
                            >
                                Community
                            </a>
                        </nav>

                        <div className="h-6 w-px bg-border-light dark:bg-border-dark hidden lg:block"></div>

                        <div className="flex items-center gap-3">
                            <button className="relative flex items-center justify-center size-10 rounded-full hover:bg-background-light dark:hover:bg-background-dark text-text-sub-light transition-colors">
                                <span className="material-symbols-outlined">notifications</span>
                                <span className="absolute top-2 right-2 size-2 bg-secondary rounded-full border-2 border-surface-light"></span>
                            </button>

                            <div className="size-10 rounded-full border-2 border-border-light dark:border-border-dark overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary hover:ring-offset-1 transition-all">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{
                                        backgroundImage:
                                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuATa5qlXZiCaZ50rzmEZZ8zvW9prHr8qw-iErrW65PcbRuefBMXPc8RzkJGvcg_MJDv_IAzvK-rGueTP33KRY8SEBIJ4rUYmiv7FP1CpFhednXrZcdau9t5p3iCjuYs1tnXDdXhJ93fMmSDWgF23zvQI3nEcuv2S3B95CKtOgn5QGmkcsu_CdD4XAgIJP52koo1ZhBGRbzWNlaPz9pIMjoHWmz_sMfx3e535oazYV57l_aUKRgZ6BXlBDSsk-OK2bZ6ipEdrIyXKZyC")',
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="flex flex-1 overflow-hidden">
                    <aside className="hidden md:flex w-64 flex-col border-r border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark overflow-y-auto">
                        <div className="flex flex-col gap-6 p-6">
                            <div>
                                <h3 className="text-xs font-bold text-text-sub-light uppercase tracking-wider mb-4 px-2">
                                    Discover
                                </h3>
                                <nav className="flex flex-col gap-1">
                                    <a
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-background-light text-primary font-medium"
                                        href="#"
                                    >
                                        <span className="material-symbols-outlined icon-fill">auto_stories</span>
                                        <span>New Arrivals</span>
                                    </a>
                                    <a
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-sub-light hover:bg-background-light hover:text-text-main-light transition-colors"
                                        href="#"
                                    >
                                        <span className="material-symbols-outlined">trending_up</span>
                                        <span>Best Sellers</span>
                                    </a>
                                    <a
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-sub-light hover:bg-background-light hover:text-text-main-light transition-colors"
                                        href="#"
                                    >
                                        <span className="material-symbols-outlined">category</span>
                                        <span>Collections</span>
                                    </a>
                                </nav>
                            </div>

                            <div>
                                <h3 className="text-xs font-bold text-text-sub-light uppercase tracking-wider mb-4 px-2">
                                    My Library
                                </h3>
                                <nav className="flex flex-col gap-1">
                                    <a
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-sub-light hover:bg-background-light hover:text-text-main-light transition-colors"
                                        href="#"
                                    >
                                        <span className="material-symbols-outlined">history_edu</span>
                                        <span>History</span>
                                    </a>
                                    <a
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-text-sub-light hover:bg-background-light hover:text-text-main-light transition-colors"
                                        href="#"
                                    >
                                        <span className="material-symbols-outlined">calendar_clock</span>
                                        <span>Holds &amp; Reservations</span>
                                        <span className="ml-auto bg-secondary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                            2
                                        </span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </aside>

                    <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-6 md:p-10">
                        <div className="max-w-6xl mx-auto flex flex-col gap-10">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-text-main-light dark:text-white mb-2">
                                        Book Details
                                    </h1>
                                    <div className="flex items-center gap-2 text-text-sub-light text-sm">
                                        <span className="hover:underline cursor-pointer">Library</span>
                                        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                        <span className="hover:underline cursor-pointer">Fiction</span>
                                        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                        <span className="text-primary font-medium">The Midnight Library</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-medium text-text-sub-light">Sort by:</span>
                                    <select className="form-select bg-surface-light border-border-light rounded-md text-sm text-text-main-light focus:ring-primary focus:border-primary py-1.5 pl-3 pr-8 shadow-sm">
                                        <option>Relevance</option>
                                        <option>Publication Date</option>
                                        <option>Popularity</option>
                                    </select>
                                </div>
                            </div>

                            <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-soft border border-border-light dark:border-border-dark overflow-hidden flex flex-col lg:flex-row">
                                <div className="relative w-full lg:w-[320px] bg-surface-dim flex-shrink-0 flex items-center justify-center p-8 border-b lg:border-b-0 lg:border-r border-border-light">
                                    <div
                                        className="absolute inset-0 opacity-5 mix-blend-multiply"
                                        style={{
                                            backgroundImage:
                                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSRriSmOobXkacLwXctz8-IadsJ1lLZ25n-ugwYVYRAfUDiG65gzrqssxYUaaJ3O_scLZ59znGn9WxgVySexL7YDmGCmEhx5GayeL4nrMUYs1JZeK1EsMdcxxzW1jdFKD5L2JI0D36OxL6V1CmZ_XNYQ8Rhtvu9jUdDwkmGjraI454eDu69SpRDcYTmhxuCt609YiVZplFjtJc-G035fSA_D9RSyKpj90HQTRikVl-GYyUHYeoTq1vlIfC2RvI1icxPeoGC9Uxy61y")',
                                        }}
                                    ></div>

                                    <div className="relative z-10 group perspective-1000">
                                        <div className="relative shadow-2xl rounded-sm transition-transform duration-500 transform group-hover:rotate-y-12 preserve-3d">
                                            <img
                                                alt="The Midnight Library Book Cover"
                                                className="w-48 rounded-sm shadow-md object-cover aspect-[2/3] block"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6mh_p8N_4JIF7ePf29qJXXSuUgncyOD5y9yKchxKvq_KNZQ6cZ2YsxXtdbyStFiD7M7OikCNDbrG4S-Xs2vXbGeIwWycxBt9A5_pDGCfNAEogXQ-GEKuggfT2HmGFAo7hrn7T0G_q40krcPgqzdhtki8F_E9PNXkx01yhuIEzVz8x304EZW8_YhxaqqQBTaBRfyLC3J3sXSqrl_UrDsBX4AhiLHPIQPrj27tXPDeB5Gh1uBa7wzejxp-EKPEX7pVyJZGzJ2dl-Dc4"
                                            />
                                            <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-r from-white/20 to-transparent z-20 pointer-events-none"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 p-6 md:p-8 flex flex-col">
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                        <div className="flex items-center gap-2">
                                            <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                                                Fiction
                                            </span>
                                            <span className="bg-surface-dim text-text-sub-light text-xs font-medium px-2.5 py-1 rounded-full border border-border-light">
                                                Fantasy
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2 bg-status-loan_bg border border-status-loan/20 px-3 py-1 rounded-full">
                                            <span className="block size-2 rounded-full bg-status-loan animate-pulse"></span>
                                            <span className="text-xs font-bold text-status-loan uppercase tracking-wider">
                                                On Loan
                                            </span>
                                        </div>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-main-light dark:text-white mb-2 leading-tight">
                                        The Midnight Library
                                    </h2>

                                    <p className="text-lg text-text-sub-light font-medium mb-6">
                                        by{" "}
                                        <span className="text-primary hover:underline cursor-pointer">Matt Haig</span>{" "}
                                        <span className="mx-2 text-border-light">|</span> Penguin Books
                                    </p>

                                    <p className="text-text-main-light/80 leading-relaxed mb-8 max-w-2xl line-clamp-3 lg:line-clamp-4">
                                        Between life and death there is a library, and within that library, the shelves go
                                        on forever. Every book provides a chance to try another life you could have lived.
                                        To see how things would be if you had made other choices... Would you have done
                                        anything different, if you had the chance to undo your regrets? A dazzling novel
                                        about all the choices that go into a life well lived.
                                    </p>

                                    <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-border-light">
                                        <div className="flex items-center gap-4">
                                            <div className="size-10 rounded-full bg-surface-dim flex items-center justify-center text-text-sub-light">
                                                <span className="material-symbols-outlined">event_busy</span>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-text-sub-light uppercase tracking-wider">
                                                    Expected Return
                                                </p>
                                                <p className="text-lg font-bold text-text-main-light">October 24, 2023</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="size-10 rounded-full bg-surface-dim flex items-center justify-center text-text-sub-light">
                                                <span className="material-symbols-outlined">groups</span>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-text-sub-light uppercase tracking-wider">
                                                    Reservation Queue
                                                </p>
                                                <div className="flex items-baseline gap-1">
                                                    <p className="text-lg font-bold text-text-main-light">0</p>
                                                    <span className="text-sm text-text-sub-light">/ 3 people</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-4 pt-6">
                                        <button className="flex-1 md:flex-none md:min-w-[220px] bg-primary hover:bg-primary/90 text-white h-12 rounded-lg font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
                                            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
                                                bookmark_add
                                            </span>
                                            <span>Reserve This Book</span>
                                        </button>

                                        <button
                                            className="h-12 w-12 flex items-center justify-center rounded-lg border border-border-light text-text-sub-light hover:text-secondary hover:border-secondary hover:bg-secondary/5 transition-all"
                                            title="Add to Favorites"
                                        >
                                            <span className="material-symbols-outlined">favorite</span>
                                        </button>

                                        <button
                                            className="h-12 w-12 flex items-center justify-center rounded-lg border border-border-light text-text-sub-light hover:text-primary hover:border-primary hover:bg-primary/5 transition-all"
                                            title="Share"
                                        >
                                            <span className="material-symbols-outlined">share</span>
                                        </button>

                                        <div className="ml-auto text-xs text-text-sub-light font-medium flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[16px]">info</span>
                                            <span>Login required to reserve</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-serif font-bold text-text-main-light dark:text-white">
                                        More from this Collection
                                    </h3>
                                    <a className="text-primary text-sm font-semibold hover:underline flex items-center gap-1 group" href="#">
                                        View All{" "}
                                        <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                    <div className="group flex flex-col">
                                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 mb-3 bg-surface-dim">
                                            <img
                                                alt="Book cover"
                                                className="w-full h-full object-cover"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw1vcW-xt3j9EHPoS3cj97Emt0qh_1Kwr-8tnXzuknlTLVceX8d_slYbJ0bcPvfOaYglZDJxyvhp8rUgytRJ750uL7N56hAIvRimTZqSujt_Ne9LZcruMfwI1gWhEGNoE8Z_5C3q-7oc7f2MFit1vHjkUJJ0cE1CTAGNn7JvzPzhEagYrRc8C2XiTycwueBI0bju9MhBHsDd215HdEtNgGmI3tCYbHfnTil9ngk-XRzlaNK5usEk34fufxs2vtIpSw3c5KfBPvjYTK"
                                            />
                                            <div className="absolute top-2 right-2">
                                                <span className="bg-status-avail_bg text-status-available text-[10px] font-bold px-2 py-0.5 rounded shadow-sm border border-status-available/20">
                                                    AVAILABLE
                                                </span>
                                            </div>
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                                                <button className="bg-white text-primary p-2 rounded-full hover:scale-110 transition-transform">
                                                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                                                </button>
                                                <button className="bg-white text-primary p-2 rounded-full hover:scale-110 transition-transform">
                                                    <span className="material-symbols-outlined text-[20px] icon-fill">favorite</span>
                                                </button>
                                            </div>
                                        </div>
                                        <h4 className="font-bold text-text-main-light text-sm leading-snug group-hover:text-primary transition-colors">
                                            The Alchemist
                                        </h4>
                                        <p className="text-xs text-text-sub-light mt-1">Paulo Coelho</p>
                                    </div>

                                    <div className="group flex flex-col">
                                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 mb-3 bg-surface-dim">
                                            <img
                                                alt="Book cover"
                                                className="w-full h-full object-cover"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsOOXxB6CZjA_mUisn9tIRcqHce-K3eSBcoUwsW2AShMMuwX-ff360t0zuCi9GbjvLBa3ZOY9KveKTr9k1Fy7m9-7zEToYDZT5tnwiOaafGW2X4rqC47ll_vWJdUulYoq1zLVgCqdkw_4ij8HSdLhXpX7zuWM4thkTgwcgcLi8MomHN1Z083bcQSkwZVYvjLx-GlNS3MpVirq9V8IzUDoFKS5BIyfJrAMXhoL8QT0cMeItobcBtEnQzWa5mLuVVcRgZIEb3Nb-zMuu"
                                            />
                                            <div className="absolute top-2 right-2">
                                                <span className="bg-status-avail_bg text-status-available text-[10px] font-bold px-2 py-0.5 rounded shadow-sm border border-status-available/20">
                                                    AVAILABLE
                                                </span>
                                            </div>
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                                                <button className="bg-white text-primary p-2 rounded-full hover:scale-110 transition-transform">
                                                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                                                </button>
                                                <button className="bg-white text-primary p-2 rounded-full hover:scale-110 transition-transform">
                                                    <span className="material-symbols-outlined text-[20px] icon-fill">favorite</span>
                                                </button>
                                            </div>
                                        </div>
                                        <h4 className="font-bold text-text-main-light text-sm leading-snug group-hover:text-primary transition-colors">
                                            Thinking, Fast and Slow
                                        </h4>
                                        <p className="text-xs text-text-sub-light mt-1">Daniel Kahneman</p>
                                    </div>

                                    <div className="group flex flex-col">
                                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 mb-3 bg-surface-dim">
                                            <img
                                                alt="Book cover"
                                                className="w-full h-full object-cover grayscale-[0.3]"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcb-ldUUigELzstDZsYapPRXNxgR5ZPNTJLTsT1IlCBb2BfbGgGDoCuETKSJSvLSd532OihFIaVcN4lzlm4QQC8HxHYQS_snQBnWl204ExCA6CYIhFIb9dwhAwRKtSWg6xMA0IfuFillAOXWA_W8ZGzLZma5cYZzs-PN2P66I8US91Xma-whzzc3WheYNSlQw4f2z2jNxzGosdhUw68Ll8ZaOVIOwuhm38ZWI-JiQW6VPBfsj7BzgZTSXr0AOJ793V5Na8tGwlhI9r"
                                            />
                                            <div className="absolute top-2 right-2">
                                                <span className="bg-status-loan_bg text-status-loan text-[10px] font-bold px-2 py-0.5 rounded shadow-sm border border-status-loan/20">
                                                    ON LOAN
                                                </span>
                                            </div>
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                                                <button className="bg-white text-primary p-2 rounded-full hover:scale-110 transition-transform">
                                                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                                                </button>
                                                <button className="bg-white text-primary p-2 rounded-full hover:scale-110 transition-transform">
                                                    <span className="material-symbols-outlined text-[20px] icon-fill">favorite</span>
                                                </button>
                                            </div>
                                        </div>
                                        <h4 className="font-bold text-text-main-light text-sm leading-snug group-hover:text-primary transition-colors">
                                            Atomic Habits
                                        </h4>
                                        <p className="text-xs text-text-sub-light mt-1">James Clear</p>
                                    </div>

                                    <div className="group flex flex-col">
                                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 mb-3 bg-surface-dim">
                                            <img
                                                alt="Book cover"
                                                className="w-full h-full object-cover"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgt-D9-SvZgnA1adYjjr3CXsch0GNX5Qzd0UHCrz1uNN2XOJ2VV203PJUwnDZ-0Kg4P9YpRrJe3-1sD_hKL9AoIs0NGTFGRfw9JPkDUXxChORXeSSe10-Ewlw6KBnj8ap1Plqq5PlmgYAdySeHtRkMwWuHpquXzInHfQOBMVu4fPey8SP0Y6L_90ybPG9HW78JySnQTYBJnpsOlTzArVuvx1xQHit2ONSW8COwKsRjvf2nqaPNnqv7y5haCAvDqa0MJpU9vdg8harz"
                                            />
                                            <div className="absolute top-2 right-2">
                                                <span className="bg-status-avail_bg text-status-available text-[10px] font-bold px-2 py-0.5 rounded shadow-sm border border-status-available/20">
                                                    AVAILABLE
                                                </span>
                                            </div>
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                                                <button className="bg-white text-primary p-2 rounded-full hover:scale-110 transition-transform">
                                                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                                                </button>
                                                <button className="bg-white text-primary p-2 rounded-full hover:scale-110 transition-transform">
                                                    <span className="material-symbols-outlined text-[20px] icon-fill">favorite</span>
                                                </button>
                                            </div>
                                        </div>
                                        <h4 className="font-bold text-text-main-light text-sm leading-snug group-hover:text-primary transition-colors">
                                            Deep Work
                                        </h4>
                                        <p className="text-xs text-text-sub-light mt-1">Cal Newport</p>
                                    </div>

                                    <div className="group flex flex-col">
                                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 mb-3 bg-surface-dim">
                                            <img
                                                alt="Book cover"
                                                className="w-full h-full object-cover"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwcHT0Sh5fWxf8ga-LppCGoxhcx54XXKTpNWXUU2kYYM7HzLq62YMiPh0ymL-A3Vk0aZae12d1OAT8ghKea8k0m23NqGVwbPNUUx2BZgousLmPV42-ZHP9BKHD-jmYYBZPKZK8y3fpjWnEJWZFqeUa8COLEGv3t3-YfAuHrGlmGtPbeLXQ5D1D8AFQeBrvl6Gt574Mu6Gx1beoAqWG6juQNmsjngSOIW8WGHHI_Qkn1j09DP4PAkKGvbkuqYCjuyZ3hgDyhHNwBwEm"
                                            />
                                            <div className="absolute top-2 right-2">
                                                <span className="bg-status-avail_bg text-status-available text-[10px] font-bold px-2 py-0.5 rounded shadow-sm border border-status-available/20">
                                                    AVAILABLE
                                                </span>
                                            </div>
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                                                <button className="bg-white text-primary p-2 rounded-full hover:scale-110 transition-transform">
                                                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                                                </button>
                                                <button className="bg-white text-primary p-2 rounded-full hover:scale-110 transition-transform">
                                                    <span className="material-symbols-outlined text-[20px] icon-fill">favorite</span>
                                                </button>
                                            </div>
                                        </div>
                                        <h4 className="font-bold text-text-main-light text-sm leading-snug group-hover:text-primary transition-colors">
                                            Psychology of Money
                                        </h4>
                                        <p className="text-xs text-text-sub-light mt-1">Morgan Housel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

function App() {
    const [currentView, setCurrentView] = useState('home');

    return (
        <React.StrictMode>
            {currentView === 'home' ? (
                <Home onNavigate={setCurrentView} />
            ) : currentView === 'board' ? (
                <Board onNavigate={setCurrentView} />
            ) : currentView === 'reviews' ? (
                <BookReview onNavigate={setCurrentView} />
            ) : (
                <WriteReview onNavigate={setCurrentView} />
            )}
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
