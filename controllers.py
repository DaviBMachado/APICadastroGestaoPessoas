from models import Pessoas
from typing import List
from fastapi import HTTPException
from uuid import uuid4

database: List[Pessoas] = []

def create_item(item: Pessoas):
    if not item.id:
        item.id = str(uuid4())
    
    database.append(item)
    return {"message": "Pessoa adicionada com sucesso!", "pessoa": item}

def get_all_items():
    if len(database) == 0:
        raise HTTPException(status_code=404, detail="Nenhuma pessoa encontrada.")
    return database

def update_item(item_id: str, updated_item: Pessoas):
    for index, item in enumerate(database):
        if item.id == item_id:
            database[index] = updated_item
            return {"message": "Pessoa atualizada com sucesso!", "pessoa": updated_item}

    raise HTTPException(status_code=404, detail="Pessoa não encontrada.")

def delete_item(item_id: str):
    for index, item in enumerate(database):
        if item.id == item_id:
            del database[index]
            return {"message": "Pessoa deletada com sucesso!"}

    raise HTTPException(status_code=404, detail="Pessoa não encontrada.")
