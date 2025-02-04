from tkinter import Tk, Label
from tkinter.ttk import Treeview
from PIL import ImageTk


class Window:
    def __init__(self, title, image, data):
        self.root = Tk()

        self.data = data
        self.title = title
        self.qr_image = ImageTk.PhotoImage(image)

        self.place_items()
        self.table_data()

        self.config()
        self.root.mainloop()

    def place_items(self):
        self.label = Label(self.root, image=self.qr_image)
        self.label.pack(fill="both", expand=True)

    def table_data(self):
        columns = list(self.data.keys())
        values = list(self.data.values())

        self.treeview = Treeview(self.root, columns=columns, show="headings", height=1)

        for index, key in enumerate(columns):
            self.treeview.heading(key, text=key, anchor="center")
            self.treeview.column(key, anchor="center")

            self.treeview.column(key, width=len(values[index]) * 8)

        self.treeview.insert("", "end", values=values)

        self.treeview.pack(expand=True, fill="x")

    def config(self):
        self.root.title(self.title)
        self.root.resizable(False, False)
