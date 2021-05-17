import React, { FC } from 'react'
import PropTypes from 'prop-types'
import MaterialBreadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { TBreadcrumbsProps, TLink } from './types'

const Breadcrumbs: FC<TBreadcrumbsProps> = ({ pageTitle, links }) => {
  return (
    <MaterialBreadcrumbs aria-label="breadcrumb">
      {links.map(({ title, path }) => (
        <Link key={`breadcrumbs-${title}`} color="inherit" href={path}>
          {title}
        </Link>
      ))}

      <Typography color="textPrimary">{pageTitle}</Typography>
    </MaterialBreadcrumbs>
  )
}

Breadcrumbs.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  links: PropTypes.arrayOf<TLink>(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

export default Breadcrumbs
