import {
  Lucide,
  Tippy,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
} from "@/base-components";
import React, { useEffect, useState } from "react";
import ApiUrl from "@/ApiService/ApiURL";
import ApiRequests from "@/ApiService/ApiRequests";
import Offre from "../../entity/Offre";

function Main() {
  
  const [allOffer, setAllOffer] = useState<Offre[]>();

  const getOffer = async () => {
    try {
        const offer = await ApiRequests.getOfferList(ApiUrl.OFFRE);
        setAllOffer([...offer])
    } catch (error) {
      console.error("Error adding user/company:", error);
    }
  };
  
  useEffect(()=> {
    getOffer();
    
  }, [])


  return (
    <>
      <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Blog Layout</h2>
        <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
          <button className="btn btn-primary shadow-md mr-2">
            Add New Job
          </button>
        </div>
      </div>
      <div className="intro-y grid grid-cols-12 gap-6 mt-5">
        {/* BEGIN: Blog Layout */}
        {allOffer?.map((ofr, index) => (
          <div
            key={index + ofr.id}
            className="intro-y col-span-12 md:col-span-6 xl:col-span-4 box"
          >
            <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 px-5 py-4">

              <div className="ml-3 mr-auto">
                <a href="" className="font-medium">
                  {ofr.title}
                </a>
              </div>
              <Dropdown className="ml-3">
                <DropdownToggle
                  tag="a"
                  href="#"
                  className="w-5 h-5 text-slate-500"
                >
                  <Lucide icon="MoreVertical" className="w-5 h-5" />
                </DropdownToggle>
                <DropdownMenu className="w-40">
                  <DropdownContent>
                    <DropdownItem>
                      <Lucide icon="Edit2" className="w-4 h-4 mr-2" /> Edit Post
                    </DropdownItem>
                    <DropdownItem>
                      <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Delete
                      Post
                    </DropdownItem>
                  </DropdownContent>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="p-5">
              <a href="" className="block font-medium text-base mt-5">
                {ofr.discreption}
              </a>
              <div className="text-slate-600 dark:text-slate-500 mt-2">
                Contract type : {ofr.contactType}
              </div>
            </div>
            <div className="flex items-center px-5 py-3 border-t border-slate-200/60 dark:border-darkmode-400">
              <Tippy
                tag="a"
                href=""
                className="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white ml-2"
                content="Hire"
              >
                <Lucide icon="Share" className="w-3 h-3" />
              </Tippy>
            </div>
          </div>
        ))}
        {/* END: Blog Layout */}
        {/* BEGIN: Pagination */}
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
          <nav className="w-full sm:w-auto sm:mr-auto">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronLeft" className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronRight" className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronsRight" className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </nav>
          <select className="w-20 form-select box mt-3 sm:mt-0">
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
          </select>
        </div>
        {/* END: Pagination */}
      </div>
    </>
  );
}

export default Main;
