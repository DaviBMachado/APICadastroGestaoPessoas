from pydantic import BaseModel
from typing import Optional
from datetime import date

class Pessoas(BaseModel):
    id: Optional[str] = None
    name: str
    dateBirth: date
    endereco: str
    cpf: str
    estado: str
