'use client';

import { CarCard } from '@/components/card/car-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { getCarsFromSession } from '@/lib/utils';
import { motion } from 'framer-motion';
import { FilterIcon, SearchIcon } from 'lucide-react';
import { useState } from 'react';
import FilterSidebar from './_component/filters';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

// const FILTERS = [
//   'Body Type',
//   'Price (IDR)',
//   'Year',
//   'Brand',
//   'Kilometers Driven',
//   'Fuel Type',
//   'Transmission',
//   'License Plate',
// ];

const CarsPage = () => {
  const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
  const listCars = getCarsFromSession();

  return (
    <section className="container grid grid-cols-1 gap-10 pt-[85px] pb-20 md:grid-cols-[260px_1fr] md:gap-8 md:pt-[160px]">
      {/* Mobile Filter Trigger */}
      <div className="flex items-center justify-between md:hidden">
        <div className="flex w-full items-center gap-2">
          <SearchIcon className="text-muted-foreground h-4 w-4" />
          <Input placeholder="Search..." className="h-9" />
        </div>
        <Sheet open={isMobileFilterOpen} onOpenChange={setMobileFilterOpen}>
          <SheetTrigger asChild>
            <Button size="sm" variant="outline" className="ml-4 px-3">
              <FilterIcon className="mr-2 h-4 w-4" /> Filter
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh] overflow-auto">
            <FilterSidebar />
          </SheetContent>
        </Sheet>
      </div>

      {/* Sidebar Filters */}
      <aside className="hidden md:block">
        <FilterSidebar />
      </aside>

      {/* Cars List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-muted-foreground text-lg font-semibold">
            {listCars.length} Cars found
          </h2>
          <Button variant="outline" className="gap-1 text-sm">
            Sort By <FilterIcon className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listCars.map((car, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// const Filters = () => {
//   return (
//     <div className="flex flex-col gap-6">
//       <Input placeholder="Search..." className="h-9" />
//       {FILTERS.map((filter, idx) => (
//         <div key={idx} className="border-b pb-4">
//           <h3 className="text-muted-foreground mb-2 text-sm font-semibold">{filter}</h3>
//           <div className="space-y-2">
//             <div className="flex items-center gap-2">
//               <input type="checkbox" className="accent-vl-primary" />
//               <label className="text-sm text-gray-700">Option A</label>
//             </div>
//             <div className="flex items-center gap-2">
//               <input type="checkbox" className="accent-vl-primary" />
//               <label className="text-sm text-gray-700">Option B</label>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

export default CarsPage;
