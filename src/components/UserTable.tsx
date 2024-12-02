"use client";

import { User } from "@/types/user";
import { UserStatusBadge } from "./UserStatusBadge";
import { UserActions } from "./UserActions";

interface UserTableProps {
  users: User[];
  onApprove: (userId: string) => void;
  onReject: (userId: string) => void;
  onChangeRole: (userId: string, newRole: string) => void;
}

export function UserTable({
  users,
  onApprove,
  onReject,
  onChangeRole,
}: UserTableProps) {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="w-full">
        <thead>
          <tr className="text-left border-b border-gray-200">
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              User
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Created
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Active
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user._id || user.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {user.name || "No Name Provided"}
                    </div>
                    <div className="text-sm text-gray-500">
                      {user.email || "No Email Provided"}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <select
                  value={user.role || "Other"}
                  onChange={(e) =>
                    onChangeRole(user._id || user.id, e.target.value)
                  }
                  className="bg-transparent border border-gray-300 rounded-md px-2 py-1 text-sm"
                >
                  <option value="Doctor">Doctor</option>
                  <option value="Nurse">Nurse</option>
                  <option value="Technician">Technician</option>
                  <option value="Admin">Admin</option>
                  <option value="Other">Other</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <UserStatusBadge
                  status={user.isApproved ? "Approved" : "Pending"}
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : "N/A"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user.lastActive
                  ? new Date(user.lastActive).toLocaleDateString()
                  : "N/A"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <UserActions
                  status={user.isApproved ? "Approved" : "Pending"}
                  onApprove={() => onApprove(user._id || user.id)}
                  onReject={() => onReject(user._id || user.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
