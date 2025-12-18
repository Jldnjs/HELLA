import React from 'react';
import './writereview.css';

export default function WriteReview({ onNavigate }) {
    const [date, setDate] = React.useState('2023-10-27');

    return (
        <div className="bg-write-background-light dark:bg-write-background-dark text-write-text-main font-display h-screen overflow-y-auto w-full flex flex-col antialiased selection:bg-write-primary/20 selection:text-write-primary">
            <header className="sticky top-0 z-50 w-full bg-write-surface-light/90 dark:bg-write-surface-dark/90 backdrop-blur-md border-b border-write-border-color dark:border-gray-800 shadow-[0_1px_2px_0_rgba(0,0,0,0.02)]">
                <div className="px-6 lg:px-40 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <a className="flex items-center gap-2 group cursor-pointer" onClick={() => onNavigate('home')}>
                            <div className="size-9 rounded-lg bg-write-primary flex items-center justify-center text-white shadow-lg shadow-write-primary/30 transition-transform group-hover:scale-105">
                                <span className="material-symbols-outlined text-[20px]">local_library</span>
                            </div>
                            <span className="text-write-text-main dark:text-white text-lg font-bold tracking-tight">Library+</span>
                        </a>
                        <nav className="hidden md:flex items-center gap-8">
                            <a className="text-write-text-sub dark:text-gray-400 text-sm font-medium hover:text-write-primary dark:hover:text-write-primary transition-colors cursor-pointer" onClick={() => onNavigate('home')}>홈</a>
                            <a className="text-write-primary dark:text-white text-sm font-bold border-b-2 border-write-primary pb-0.5 cursor-pointer">내 서재</a>
                            <a className="text-write-text-sub dark:text-gray-400 text-sm font-medium hover:text-write-primary dark:hover:text-write-primary transition-colors cursor-pointer" onClick={() => onNavigate('board')}>커뮤니티</a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative hidden sm:block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-write-text-sub">
                                <span className="material-symbols-outlined text-[20px]">search</span>
                            </span>
                            <input className="w-64 bg-write-surface-accent dark:bg-write-background-dark border-transparent rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-write-primary/20 focus:bg-white dark:focus:bg-gray-800 focus:border-write-primary/30 transition-all placeholder-write-text-sub/50" placeholder="도서 검색..." />
                        </div>
                        <div className="size-9 rounded-full bg-gray-200 dark:bg-gray-700 bg-center bg-cover border-2 border-white dark:border-gray-800 shadow-sm cursor-pointer hover:ring-2 hover:ring-write-primary hover:ring-offset-2 transition-all" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-mbfPOXddtddDiiYvLQgrrMBGIj8I0PR0mMP9hyesBtRoxTtUQm7l0_-QrMBg90bSebPJeNUJzJekEgnzX-HWHywp4Dch87rXouxU6o2MdeVujdqj285iKf-LmYsAiWO1ayNdGcIeugkUujZJt2gwaecm0i49JTKHblBbW6a9ykvCZGdOTJeGEeWbs19RQlILphRN65mYFaao4N3xj7ySelJqMSISaPVm8rolcGDKUA8Rxc0HiWhHJHbK4W8pTJwLANI76V7yfxpT')" }}></div>
                    </div>
                </div>
            </header>
            <main className="flex-grow px-6 lg:px-40 py-8 lg:py-12">
                <div className="max-w-[1100px] mx-auto flex flex-col gap-10">
                    <nav className="flex items-center gap-2 text-sm text-write-text-sub dark:text-gray-500">
                        <a className="hover:text-write-primary transition-colors cursor-pointer" onClick={() => onNavigate('home')}>홈</a>
                        <span className="material-symbols-outlined text-[14px] text-gray-400">chevron_right</span>
                        <a className="hover:text-write-primary transition-colors cursor-pointer">내 서재</a>
                        <span className="material-symbols-outlined text-[14px] text-gray-400">chevron_right</span>
                        <span className="text-write-text-main dark:text-gray-200 font-semibold">기록 작성</span>
                    </nav>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-write-border-color dark:border-gray-800 pb-8">
                        <div className="space-y-3">
                            <h1 className="text-3xl md:text-4xl font-bold font-serif text-write-text-main dark:text-white tracking-tight">독서 기록 남기기</h1>
                            <p className="text-write-text-sub dark:text-gray-400 text-lg font-light">기억하고 싶은 문장과 감상을 기록하여 나만의 서재를 채워보세요.</p>
                        </div>
                        <button className="text-sm font-medium text-write-text-sub dark:text-gray-400 hover:text-write-primary flex items-center gap-1.5 transition-colors px-4 py-2 rounded-full hover:bg-write-surface-accent dark:hover:bg-gray-800">
                            <span className="material-symbols-outlined text-[18px]">history</span>
                            임시 저장된 글 (2)
                        </button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        <div className="lg:col-span-4 flex flex-col gap-6">
                            <div className="bg-write-surface-light dark:bg-write-surface-dark rounded-xl p-6 shadow-sm border border-write-border-color dark:border-gray-800 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-write-primary/80"></div>
                                <label className="block text-sm font-bold text-write-text-main dark:text-gray-200 mb-4">
                                    <span className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-write-primary text-[22px]">book_2</span>
                                        기록할 도서 선택
                                    </span>
                                </label>
                                <div className="relative group">
                                    <select className="w-full appearance-none bg-write-background-light dark:bg-write-background-dark border border-gray-300 dark:border-gray-700 text-write-text-main dark:text-white rounded-lg py-3.5 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-write-primary/50 focus:border-write-primary cursor-pointer transition-shadow shadow-sm font-medium">
                                        <option disabled selected value="">최근 대출한 도서를 선택하세요</option>
                                        <option value="clean-code">클린 코드 (Clean Code)</option>
                                        <option value="pragmatic">실용주의 프로그래머</option>
                                        <option value="refactoring">리팩터링 2판</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-write-text-sub group-hover:text-write-primary transition-colors">
                                        <span className="material-symbols-outlined">expand_more</span>
                                    </div>
                                </div>
                                <div className="mt-3 flex items-center justify-between">
                                    <p className="text-xs text-write-text-sub dark:text-gray-500">최근 3개월 내 대출 기록</p>
                                    <a className="text-xs font-semibold text-write-primary hover:underline cursor-pointer">직접 검색하기</a>
                                </div>
                            </div>
                            <div className="bg-write-surface-accent dark:bg-write-surface-dark/50 rounded-xl p-6 border border-write-border-color dark:border-gray-800 flex flex-col items-center text-center">
                                <div className="w-full flex items-center gap-2 text-xs font-bold text-write-text-sub mb-4 uppercase tracking-wider">
                                    <span className="w-2 h-2 rounded-full bg-write-primary/60"></span>
                                    Book Information
                                </div>
                                <div className="relative mb-6 group cursor-pointer perspective-1000">
                                    <div className="absolute inset-0 bg-black/10 rounded-lg transform translate-y-3 translate-x-3 blur-sm"></div>
                                    <div className="relative w-36 aspect-[2/3] rounded-sm shadow-xl overflow-hidden bg-gray-100 dark:bg-gray-800 ring-1 ring-black/5">
                                        <img alt="Book cover of Clean Code" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAU41nAF8W88lekAqnE44ywMpdUx3AlKeNUpOnV9M3nrUEt3MaGmN1GQWHdPsFnkvIWHZtqBn-OS330aGzmBJBVIcD3XIFM8fFw0IFw15Ks8g94JVuL7TE-X_r1IPC1ovQ2nvIyO9vRGGpiGZCGjZlkmrQ48m71iym6UTK8UfdIobInbcM8TskAg-9UDhf2TcK3SaSFq4hV_ZDxoxi4_v17t-Q18pNtQseaAUK3XL6t9VivYH0Lcud_94iUpJqeTLx_vdNkeNyvc0B" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold font-serif text-write-text-main dark:text-white mb-1.5">클린 코드</h3>
                                <p className="text-sm font-medium text-write-text-sub dark:text-gray-400 mb-6 px-4">애자일 소프트웨어 장인 정신</p>
                                <div className="w-full bg-white dark:bg-write-surface-dark rounded-lg p-4 border border-write-border-color dark:border-gray-700 space-y-3 text-left shadow-sm">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-write-text-sub dark:text-gray-500 text-xs uppercase tracking-wide">저자</span>
                                        <span className="text-write-text-main dark:text-gray-300 font-semibold">로버트 C. 마틴</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-write-text-sub dark:text-gray-500 text-xs uppercase tracking-wide">출판사</span>
                                        <span className="text-write-text-main dark:text-gray-300 font-semibold">인사이트</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-write-text-sub dark:text-gray-500 text-xs uppercase tracking-wide">발행일</span>
                                        <span className="text-write-text-main dark:text-gray-300 font-semibold">2013.12.24</span>
                                    </div>
                                </div>
                                <button className="mt-4 text-xs text-write-text-sub hover:text-write-primary underline decoration-dotted underline-offset-4">정보가 올바르지 않나요?</button>
                            </div>
                        </div>
                        <div className="lg:col-span-8 flex flex-col gap-6">
                            <div className="bg-write-surface-light dark:bg-write-surface-dark rounded-xl p-8 lg:p-10 shadow-sm border border-write-border-color dark:border-gray-800 h-full flex flex-col">
                                <div className="flex flex-col md:flex-row gap-8 mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
                                    <div className="flex flex-col gap-3">
                                        <label className="text-sm font-bold text-write-text-main dark:text-gray-200 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[18px] text-write-text-sub">star_half</span>
                                            나의 평점
                                        </label>
                                        <div className="flex items-center gap-1 bg-write-surface-accent dark:bg-gray-800 px-3 py-2 rounded-lg w-fit">
                                            <button className="text-yellow-500 hover:scale-110 transition-transform"><span className="material-symbols-outlined text-[20px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span></button>
                                            <button className="text-yellow-500 hover:scale-110 transition-transform"><span className="material-symbols-outlined text-[20px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span></button>
                                            <button className="text-yellow-500 hover:scale-110 transition-transform"><span className="material-symbols-outlined text-[20px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span></button>
                                            <button className="text-yellow-500 hover:scale-110 transition-transform"><span className="material-symbols-outlined text-[20px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span></button>
                                            <button className="text-gray-300 dark:text-gray-600 hover:text-yellow-500 hover:scale-110 transition-all"><span className="material-symbols-outlined text-[20px]">star</span></button>
                                            <span className="ml-3 text-base font-bold text-write-text-main dark:text-white">4.0</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <label className="text-sm font-bold text-write-text-main dark:text-gray-200 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[18px] text-write-text-sub">event_available</span>
                                            완독일
                                        </label>
                                        <div className="relative">
                                            <input
                                                className="w-full bg-write-surface-accent dark:bg-write-background-dark border-transparent rounded-lg text-sm px-4 py-3.5 text-write-text-main dark:text-white focus:ring-2 focus:ring-write-primary/20 focus:bg-white dark:focus:bg-gray-900 transition-colors font-medium"
                                                type="date"
                                                value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow flex flex-col gap-4">
                                    <label className="text-sm font-bold text-write-text-main dark:text-gray-200 flex justify-between items-center">
                                        <span className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[18px] text-write-text-sub">edit_note</span>
                                            독후감 작성
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-normal text-write-text-sub bg-write-surface-accent dark:bg-gray-800 px-2 py-1 rounded">Markdown 지원</span>
                                        </div>
                                    </label>
                                    <div className="flex flex-col border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-write-primary/30 focus-within:border-write-primary transition-all shadow-sm">
                                        <div className="flex gap-1 p-2 bg-write-background-light dark:bg-write-background-dark border-b border-gray-200 dark:border-gray-700">
                                            <button className="p-1.5 rounded hover:bg-white dark:hover:bg-gray-700 text-write-text-sub transition-colors" title="Bold">
                                                <span className="material-symbols-outlined text-[20px]">format_bold</span>
                                            </button>
                                            <button className="p-1.5 rounded hover:bg-white dark:hover:bg-gray-700 text-write-text-sub transition-colors" title="Italic">
                                                <span className="material-symbols-outlined text-[20px]">format_italic</span>
                                            </button>
                                            <button className="p-1.5 rounded hover:bg-white dark:hover:bg-gray-700 text-write-text-sub transition-colors" title="Underline">
                                                <span className="material-symbols-outlined text-[20px]">format_underlined</span>
                                            </button>
                                            <div className="w-px h-5 bg-gray-300 dark:bg-gray-600 mx-1 self-center"></div>
                                            <button className="p-1.5 rounded hover:bg-white dark:hover:bg-gray-700 text-write-text-sub transition-colors" title="Quote">
                                                <span className="material-symbols-outlined text-[20px]">format_quote</span>
                                            </button>
                                            <button className="p-1.5 rounded hover:bg-white dark:hover:bg-gray-700 text-write-text-sub transition-colors" title="List">
                                                <span className="material-symbols-outlined text-[20px]">format_list_bulleted</span>
                                            </button>
                                        </div>
                                        <textarea className="flex-grow w-full min-h-[450px] resize-y p-6 bg-white dark:bg-gray-900 text-base lg:text-lg leading-loose font-serif text-write-text-main dark:text-gray-200 focus:outline-none placeholder-gray-300 dark:placeholder-gray-700" placeholder="이 책을 읽으며 느낀 점이나 인상 깊었던 구절을 자유롭게 기록해보세요."></textarea>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <label className="inline-flex items-center cursor-pointer group p-2 rounded-lg hover:bg-write-surface-accent dark:hover:bg-gray-800 transition-colors">
                                        <input defaultChecked className="sr-only peer" type="checkbox" />
                                        <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-write-primary"></div>
                                        <div className="flex flex-col ml-3">
                                            <span className="text-sm font-semibold text-write-text-main dark:text-gray-300">공개 설정</span>
                                            <span className="text-xs text-write-text-sub">다른 사용자에게 내 기록을 공개합니다</span>
                                        </div>
                                    </label>
                                    <div className="flex items-center gap-3 w-full sm:w-auto">
                                        <button className="flex-1 sm:flex-none px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-write-text-sub dark:text-gray-300 font-medium hover:bg-write-surface-accent dark:hover:bg-gray-800 transition-colors" onClick={() => onNavigate('reviews')}>
                                            취소
                                        </button>
                                        <button className="flex-1 sm:flex-none px-10 py-3 rounded-lg bg-write-primary hover:bg-write-primary-hover text-white font-bold shadow-lg shadow-write-primary/20 hover:shadow-write-primary/40 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2" onClick={() => onNavigate('reviews')}>
                                            <span className="material-symbols-outlined text-[20px]">send</span>
                                            기록 등록하기
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="border-t border-write-border-color dark:border-gray-800 bg-write-surface-light dark:bg-write-surface-dark mt-auto py-12">
                <div className="px-6 lg:px-40 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 opacity-80">
                        <span className="material-symbols-outlined text-write-primary text-[24px]">local_library</span>
                        <p className="text-sm text-write-text-sub dark:text-gray-500 font-medium">© 2024 Library+ Clean.</p>
                    </div>
                    <div className="flex gap-8">
                        <a className="text-sm text-write-text-sub dark:text-gray-500 hover:text-write-primary transition-colors cursor-pointer">이용약관</a>
                        <a className="text-sm text-write-text-sub dark:text-gray-500 hover:text-write-primary transition-colors cursor-pointer">개인정보처리방침</a>
                        <a className="text-sm text-write-text-sub dark:text-gray-500 hover:text-write-primary transition-colors cursor-pointer">고객센터</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
