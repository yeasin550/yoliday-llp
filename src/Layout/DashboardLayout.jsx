import { useState } from "react";
import { MdDashboardCustomize, MdHighlight } from "react-icons/md";
import Vector from "../assets/Vector.png";
import profile from "../assets/profile.png";
import { ImCross } from "react-icons/im";
import { BiSolidUserAccount } from "react-icons/bi";
import { FaBell, FaCaretDown, FaFilter, FaSearch, FaBars } from "react-icons/fa";

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const projects = [
        {
            id: 1,
            title: "Kemampuan Merangkum Tulisan",
            description: "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus.Lorem Ipsum Dolor Sit Amet Consectetur...",
            category: "BAHASA SUNDA",
            author: "Oleh Al-Raiqi Samaan",
            image: "https://img.freepik.com/free-photo/purple-yeti-cartoon-sitting-chair_23-2150248736.jpg?t=st=1730186574~exp=1730190174~hmac=0dfd8f813e8b6f0fca55c855baab47e86670fbb28d60243ed14dd292406be5ac&w=740"
        },
        {
            id: 2,
            title: "Kemampuan Merangkum Tulisan",
            description: "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus.Lorem Ipsum Dolor Sit Amet Consectetur...",
            category: "BAHASA SUNDA",
            author: "Oleh Al-Raiqi Samaan",
            image: "https://img.freepik.com/free-psd/fashion-influencer-3d-illustration_23-2151644366.jpg?t=st=1730188827~exp=1730192427~hmac=ea66ed237dc649d2a55067023c60208fa22d8a5d37e25326f6a1ea73874b252f&w=740"
        },
        {
            id: 3,
            title: "Kemampuan Merangkum Tulisan",
            description: "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus.Lorem Ipsum Dolor Sit Amet Consectetur...",
            category: "BAHASA SUNDA",
            author: "Oleh Al-Raiqi Samaan",
            image: "https://img.freepik.com/free-photo/blank-screens-laptop-smartphone-wooden-table-outdoors-with-nature-wall-glasses-fresh-juice-nearby-concept-creative-workplace-business-freelance-copyspace_155003-27823.jpg?t=st=1730189140~exp=1730192740~hmac=95d8da446ac48fa813def9798fcafc7afbd68648f50148641398cada0cff1a20&w=740"
        },
    ];

    return (
        <div className="flex">
            {/* Left Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#DF5532] text-white p-4 text-lg transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 lg:translate-x-0`}
            >
                <div className="flex items-center gap-3 mx-3 mb-12">
                    <img src={Vector} className="w-10" alt="" />
                    <h1>Logo</h1>
                </div>
                <ul>
                    <li className="py-2 px-3 hover:bg-gray-700 rounded flex items-center gap-3"><MdDashboardCustomize />Dashboard</li>
                    <li className="py-2 px-3 hover:bg-gray-700 rounded flex items-center gap-3"><MdHighlight />Portfolio</li>
                    <li className="py-2 px-3 hover:bg-gray-700 rounded flex items-center gap-3"><ImCross />Inputs</li>
                    <li className="py-2 px-3 hover:bg-gray-700 rounded flex items-center gap-3"><BiSolidUserAccount />Profile</li>
                </ul>
            </aside>

            {/* Overlay for mobile sidebar */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Main Content */}
            <div className="flex-1 lg:ml-64 flex flex-col">
                {/* Top Navbar */}
                <header className="px-10 py-3 shadow flex items-center justify-between gap-4 sticky top-0 z-50 bg-white">
                    {/* Toggle Button for Sidebar */}
                    <FaBars
                        className="text-2xl cursor-pointer lg:hidden"
                        onClick={toggleSidebar}
                    />

                    {/* Right-end Content */}
                    <div className="ml-auto flex items-center gap-4">
                        <FaBell className="cursor-pointer" />
                        <div className="flex items-center gap-3">
                            <img src={profile} className="cursor-pointer" alt="" />
                            <div className="cursor-pointer">
                                <h1 className="font-bold flex items-center gap-3">Sakira <FaCaretDown /></h1>
                                <h1>Manager</h1>
                            </div>
                        </div>
                    </div>
                </header>


                {/* Main Dashboard Content */}
                <div className="min-h-screen bg-gray-100 md:p-10 p-3 overflow-y-auto">
                    <main className="container mx-auto p-4 md:p-6 bg-white rounded-md">
                        {/* Portfolio Header */}
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold mb-4">Portfolio</h1>

                            {/* Navigation and Search */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                                {/* Tabs */}
                                <div className="flex space-x-6 border-b border-gray-200 w-full md:w-auto">
                                    <button className="text-red-500 border-b-2 border-red-500 pb-2 px-1">Project</button>
                                    <button className="text-gray-500 pb-2 px-1">Saved</button>
                                    <button className="text-gray-500 pb-2 px-1">Shared</button>
                                    <button className="text-gray-500 pb-2 px-1">Achievement</button>
                                </div>

                                {/* Search and Filter */}
                                <div className="flex gap-4 w-full md:w-auto">
                                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg">
                                        <FaFilter />
                                        <span>Filter</span>
                                    </button>
                                    <div className="relative flex-grow md:w-64">
                                        <input
                                            type="text"
                                            placeholder="Search a project"
                                            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg"
                                        />
                                        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project Cards */}
                        <div className="space-y-4">
                            {projects.map((project) => (
                                <div key={project.id} className="bg-white rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 shadow-md border">
                                    <div className="w-full md:w-80 h-56 flex-shrink-0">
                                        <img
                                            src={project.image}
                                            alt=""
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                                        <p className="text-gray-600 mb-4 text-lg">{project.description}</p>
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mt-6 text-lg">
                                            <div>
                                                <div className="text-gray-700 font-medium">{project.category}</div>
                                                <div className="text-gray-500">{project.author}</div>
                                            </div>
                                            <button className="bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition-colors">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
