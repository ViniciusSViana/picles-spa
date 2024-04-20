import { Header } from "../../components/common/Header/Header";
import { Grid } from "../../components/layout/Grid/Grid";
import { Card } from "../../components/common/Card";
import { Skeleton } from "../../components/common/Skeleton";
import { Pagination } from "../../components/common/Pagination";
import { useSearchParams } from "react-router-dom";
import styles from './Pets.module.css'
import { Select } from "../../components/common/Select/Slect";
import { Button } from "../../components/common/Button";
import { filterColumns } from "./Pets.Constants";
import { usePetList } from "../../hooks/usePetList";
import { FormEvent } from "react";
import { GetPetsRequest } from "../../interfaces/pets";




export function Pets() {
    const [searchParams, setSearchParams] = useSearchParams()

  const urlParams = {
    page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
    type: searchParams.get('type') ?? '',
    size: searchParams.get('size') ?? '',
    gender: searchParams.get('gender') ?? '',
  }

  const usePetLists = usePetList(urlParams)

  function changePage(page: number) {
    setSearchParams((params) => {
      params.set('page', String(page))
      return params
    })
  }

  function getFormValue(form: HTMLFormElement) {
    const formData = new FormData(form)
    return Object.fromEntries(formData)
  }

  function updateSearchParams(urlParams: GetPetsRequest) {
    const fields: (keyof GetPetsRequest)[] = ['type', 'size', 'gender']
    const newParams = new URLSearchParams()

    fields.forEach((field) => {
      if (urlParams[field]) {
        newParams.set(field, String(urlParams[field]))
      }
    })
    newParams.set('page', '1')

    return newParams
  }

  function applyFilters(event: FormEvent) {
    event.preventDefault()

    const formValues = getFormValue(event.target as HTMLFormElement)
    const newSearchParams = updateSearchParams(formValues)

    setSearchParams(newSearchParams)
  }


    return (
        <>
            <Grid>
                <div className={styles.container}>
                    <Header />

                    <form className={styles.filters} onSubmit={applyFilters}>
                        <div className={styles.columns}>
                            {filterColumns.map((filter) => (
                                <div className={styles.column} key={filter.name}>
                                    <Select
                                        label={filter.title}
                                        defaultValue={urlParams[filter.name]}
                                        options={filter.options}
                                        name={filter.name}
                                    >

                                    </Select>
                                </div>
                            ))}

                        </div>
                        <Button type="submit">Buscar</Button>
                    </form>

                    {usePetLists.isLoading && (
                        <Skeleton containerClassName={styles.skeleton} count={10} />
                    )

                    }
                    <main className={styles.list}>
                        {
                            usePetLists.data?.items?.map((pet) => (
                                <Card
                                    key={pet.id}
                                    href={`/pets/{pet.id}`}
                                    text={pet.name}
                                    thumb={pet.photo}
                                />
                            ))
                        }

                    </main>

                    {usePetLists.data?.currentPage &&
                        <Pagination
                            currentPage={usePetLists.data.currentPage}
                            totalPages={usePetLists.data.totalPages}
                            onPageChange={(number) => changePage(number)}

                        />
                    }

                </div>

            </Grid>

        </>
    )
}