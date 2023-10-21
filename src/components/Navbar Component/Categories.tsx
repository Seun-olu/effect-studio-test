'use client';
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Down from '@/assets/icons/svg/down.svg'
import Api from '@/Api/Server'




const Categories = () => {
    const [categories, setCategories] = useState<Array<any>>([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [mouseDropdown, setMouseDropdown] = useState(false);

    useEffect(() => {
        Api.get('product-category')
            .then((res) => {
                setCategories(res.data.categories.data)
                console.log((res.data.categories.data));
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const handleMouseGoes = () => {
        setDropdownVisible(true);
    }

    const handleMouseLeaves = () => {
        setTimeout(() => {
            if (!mouseDropdown) {
                setDropdownVisible(false);
            }
        }, 500)
    };

    const handleDropdownMouseGoes = () => {
        setMouseDropdown(true);
        setDropdownVisible(true);
    };

    const handleDropdownMouseLeaves = () => {
        setMouseDropdown(false);
        setDropdownVisible(false);
    };

    return (
        <div
            className="relative min-h-[56px]"
            onMouseEnter={handleMouseGoes}
            onMouseLeave={handleMouseLeaves}
        >
            <div className="group h-[56px] flex items-center justify-center gap-2 border-b-[1px] border-r-[1px] border-[#F5F5F6] cursor-pointer">
                <p className="md:text-xs lg:text-sm font-semibold leading-4 text-black">
                    All Categories
                </p>
                <Image src={Down} alt="" quality={100} />
            </div>

            {dropdownVisible && (
                <div
                    className="absolute z-10 mt-2 left-2 bg-[#f9f9f9] py-3 shadow-lg min-w-[230px] rounded-lg"
                    onMouseEnter={handleDropdownMouseGoes}
                    onMouseLeave={handleDropdownMouseLeaves}
                >
                    <ul className="flex flex-col gap-1">
                        {categories.map((category) => (
                            <li key={category?.id} className="w-full flex py-1 px-3 hover:border hover:border-[#EAEAEC]">
                                <a
                                    href="#"
                                    className="text-sm text-black w-full"
                                >
                                    {category?.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Categories