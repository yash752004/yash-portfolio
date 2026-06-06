import React, { useState } from "react";
import { ContactType } from "@/hooks/useContacts";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Calendar, MapPin, Tag, MessageSquare, Briefcase, CheckCircle, Trash2 } from "lucide-react";

interface ContactsManagerProps {
  contacts: ContactType[];
  onUpdateStatus: (id: string, status: ContactType['status']) => void;
  onDelete: (id: string) => void;
}

export const ContactsManager: React.FC<ContactsManagerProps> = ({ contacts, onUpdateStatus, onDelete }) => {
  const [selectedContact, setSelectedContact] = useState<ContactType | null>(null);

  const formatDate = (isoStr: string) => {
    return new Date(isoStr).toLocaleDateString("en-US", {
      month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Leads & Contacts</h3>
      </div>

      <div className="bg-white dark:bg-[#1e293b] rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-white/10 text-xs uppercase tracking-wider text-slate-500 font-bold">
                <th className="p-4">Name / Email</th>
                <th className="p-4">Source</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-500">
                    No leads or contacts found.
                  </td>
                </tr>
              ) : (
                contacts.map(contact => (
                  <tr key={contact.id} className="border-b border-slate-100 dark:border-white/5 hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors">
                    <td className="p-4">
                      <p className="font-bold text-slate-900 dark:text-white">{contact.name}</p>
                      <a href={`mailto:${contact.email}`} className="text-sm text-primary-600 hover:underline">{contact.email}</a>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-bold ${
                        contact.source === 'Digital Blueprint' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {contact.source}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-slate-600 dark:text-slate-400">
                      {formatDate(contact.createdAt)}
                    </td>
                    <td className="p-4">
                      <select 
                        value={contact.status}
                        onChange={(e) => onUpdateStatus(contact.id, e.target.value as any)}
                        className={`text-xs font-bold rounded-full px-3 py-1 outline-none appearance-none cursor-pointer border ${
                          contact.status === 'New' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                          contact.status === 'Reviewed' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                          'bg-emerald-50 text-emerald-700 border-emerald-200'
                        }`}
                      >
                        <option value="New">New</option>
                        <option value="Reviewed">Reviewed</option>
                        <option value="Responded">Responded</option>
                      </select>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button 
                          onClick={() => setSelectedContact(contact)}
                          className="px-3 py-1.5 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                        >
                          View Details
                        </button>
                        <button 
                          onClick={() => {
                            if (window.confirm("Are you sure you want to delete this lead?")) {
                              onDelete(contact.id);
                            }
                          }}
                          className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Details Modal */}
      {selectedContact && (
        <Dialog open={!!selectedContact} onOpenChange={() => setSelectedContact(null)}>
          <DialogContent className="bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                Lead Details
                <span className={`text-xs px-2.5 py-0.5 rounded-full ${
                   selectedContact.source === 'Digital Blueprint' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {selectedContact.source}
                </span>
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4 space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Name</span>
                  <p className="font-bold text-slate-900 dark:text-white">{selectedContact.name}</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Email</span>
                  <a href={`mailto:${selectedContact.email}`} className="font-bold text-primary-600 hover:underline">{selectedContact.email}</a>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">Phone</span>
                  <p className="font-bold text-slate-900 dark:text-white">{selectedContact.phone || "N/A"}</p>
                </div>
              </div>

              {selectedContact.source === 'Digital Blueprint' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border border-purple-100 bg-purple-50/50 p-4 rounded-xl">
                  <div>
                    <span className="text-[10px] font-extrabold text-purple-500 uppercase tracking-wider block mb-1">Project Type</span>
                    <p className="text-sm font-bold text-slate-800">{selectedContact.projectType || "N/A"}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-purple-500 uppercase tracking-wider block mb-1">Timeline</span>
                    <p className="text-sm font-bold text-slate-800">{selectedContact.timeline || "N/A"}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-purple-500 uppercase tracking-wider block mb-1">Budget</span>
                    <p className="text-sm font-bold text-slate-800">{selectedContact.budget || "N/A"}</p>
                  </div>
                </div>
              )}

              {selectedContact.source === 'Contact Form' && selectedContact.service && (
                <div className="p-4 border border-blue-100 bg-blue-50/50 rounded-xl">
                  <span className="text-[10px] font-extrabold text-blue-500 uppercase tracking-wider block mb-1">Interested Service</span>
                  <p className="text-sm font-bold text-slate-800">{selectedContact.service}</p>
                </div>
              )}

              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <MessageSquare size={14} /> Message
                </span>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {selectedContact.message}
                </div>
              </div>

            </div>
          </DialogContent>
        </Dialog>
      )}

    </div>
  );
};
