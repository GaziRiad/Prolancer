import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HiDocumentText,
  HiOutlineChevronDown,
  HiOutlineLogout,
  HiUser,
} from "react-icons/hi";

// export default function Profile() {
//   return (
//     <div className="flex items-center justify-center gap-3">
//       <Avatar>
//         <AvatarImage src="https://github.com/shadcn.png" />
//         <AvatarFallback>CN</AvatarFallback>
//       </Avatar>
//       <HiOutlineChevronDown size={18} />
//     </div>
//   );
// }

export default function Profile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <HiOutlineChevronDown size={18} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-48">
        <DropdownMenuLabel className="cursor-pointer flex items-center justify-start gap-2 w-full hover:bg-input py-2 px-4 text-md font-medium">
          <HiUser size={22} />
          <p>My profile</p>
        </DropdownMenuLabel>
        <DropdownMenuLabel className="cursor-pointer flex items-center justify-start gap-2 w-full hover:bg-input py-2 px-4 text-md font-medium">
          <HiDocumentText size={22} />
          <p>My posts</p>
        </DropdownMenuLabel>
        <DropdownMenuLabel className="cursor-pointer flex items-center justify-start gap-2 w-full hover:bg-input py-2 px-4 text-md font-medium">
          <HiOutlineLogout size={22} />

          <p>Log out</p>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
